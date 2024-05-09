import { useRef } from "react";
import classes from "./profile-form.module.css";

function ProfileForm() {
    const newPwdRef = useRef();
    const oldPwdRef = useRef();
    const passwordChangeHnadler = async (e) => {
        e.preventDefault();
        console.log(newPwdRef.current.value);
        console.log(oldPwdRef.current.value);

        const result = await fetch("/api/user/change-password", {
            method: "PATCH",
            body: JSON.stringify({
                newPassword: newPwdRef.current.value,
                oldPassword: oldPwdRef.current.value,
            }),
        });

        console.log(result);
    };

    return (
        <form className={classes.form} onSubmit={passwordChangeHnadler}>
            <div className={classes.control}>
                <label htmlFor="new-password">New Password</label>
                <input type="password" id="new-password" ref={newPwdRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="old-password">Old Password</label>
                <input type="password" id="old-password" ref={oldPwdRef} />
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
}

export default ProfileForm;
