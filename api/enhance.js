import fetch from "node-fetch";

export default async (req, res) => {
    try {
        const imageUrl = req.query.image;

        const response = await fetch("https://api.pixelcut.app/super-enhance", {
            method: "POST",
            headers: {
                "Authorization": "Bearer demo",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                image_url: imageUrl
            })
        });

        const result = await response.json();
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: "Enhance server error" });
    }
};
