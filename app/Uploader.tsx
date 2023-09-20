"use client";

import { upload } from "@vercel/blob/client";
import { ChangeEvent } from "react";

export function Uploader() {

    async function uploadFile(e:ChangeEvent<HTMLInputElement>){
        const file = e.target.files[0];

        if (!file) return;

        const blob = await upload(file.name, file, {
            access: 'public',
            handleUploadUrl: 'api/upload'
        });

        alert('Uploaded ' + blob.pathname);
    }

    return (
        <label>
            Document
            <input type="file" name="document" onChange={uploadFile}/>
        </label>
    )
}