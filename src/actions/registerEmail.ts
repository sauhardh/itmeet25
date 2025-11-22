"use server";

export async function registerEmail(formData: FormData) {
    const email = formData.get("email");

    if (typeof email !== "string" || email.trim().length === 0) {
        throw new Error("Invalid email");
    }

    const scriptUrl = process.env.APPS_SCRIPT_URL;
    if (!scriptUrl) {
        throw new Error("Server not configured");
    }

    const res = await fetch(scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Apps Script failed");
    }

    return { ok: true };
}
