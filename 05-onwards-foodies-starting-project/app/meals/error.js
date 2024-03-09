"use client";
export default function Error({ error: { message } }) {
    return (
        <main className="error">
            <h1>AN ERROR OCCURRED!</h1>
            <p>
                식사정보를 가져오는 도중에 에러가 발생하였습니다. 다음에 다시
                시도해 주세요.
            </p>
            <p>{message}</p>
        </main>
    );
}
