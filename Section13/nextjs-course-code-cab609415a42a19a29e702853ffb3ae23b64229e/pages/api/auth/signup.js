import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";
async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        const { email, password } = data;

        if (
            !email ||
            !email.includes("@") ||
            !password ||
            password.trim().length < 7
        ) {
            res.status(422).json({
                message: "Inavalid input - 비밀번호는 7자리 이상입니다.",
            });
            return;
        }

        const client = await connectToDatabase();
        const db = client.db();

        const existingUser = await db.collection("users").findOne({ email });
        if (existingUser) {
            res.status(422).json({ message: "이미 사용중인 이메일입니다." });
            client.close();
            return;
        }

        const hashedPassword = await hashPassword(password);
        const result = db.collection("users").insertOne({
            email,
            password: hashedPassword,
        });

        res.status(201).json({ message: "생성완료!" });
    }
}
export default handler;
