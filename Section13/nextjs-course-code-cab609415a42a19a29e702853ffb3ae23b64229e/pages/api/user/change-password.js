import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../../lib/db";
import { hashPassword, verifyPassword } from "../../../lib/auth";

async function handler(req, res) {
    if (req.method !== "PATCH") {
        return;
    }

    const session = await getSession({ req: req });

    if (!session) {
        res.status(401).json({ message: "인증되지 않았습니다." });
        return;
    }

    const client = await connectToDatabase();
    const usersCollection = client.db().collection("users");
    const user = await usersCollection.findOne({ email: session.user.email });
    if (!user) {
        res.status(404).json({ message: "일치하는 유저를 찾을 수 없습니다." });
        client.close();
        return;
    }
    const { newPassword, oldPassword } = JSON.parse(req.body);

    if (!newPassword || newPassword.trim().length < 7) {
        res.status(422).json({
            message: "Inavalid input - 비밀번호는 7자리 이상입니다.",
        });
        client.close();
        return;
    }

    const result = await verifyPassword(oldPassword, user.password);
    if (!result) {
        res.status(403).json({ message: "기존 비밀번호가 다릅니다." });
        client.close();
        return;
    }

    const hashedPassword = await hashPassword(newPassword);
    await usersCollection.updateOne(
        { email: session.user.email },
        { $set: { password: hashedPassword } }
    );

    client.close();
    res.status(200).json({ message: "비밀번호가 변경되었습니다." });
    return;
}
export default handler;
