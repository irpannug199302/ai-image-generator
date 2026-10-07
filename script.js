function buatPrompt() {

    const pakaian =
        document.getElementById("pakaian").value;

    const warna =
        document.getElementById("warna").value;

    const model =
        document.getElementById("model").value;

    const panjang =
        document.getElementById("panjang").value;

    const pose =
        document.getElementById("pose").value;

    const lokasi =
        document.getElementById("lokasi").value;

    const rasio =
        document.getElementById("rasio").value;


    const prompt = `

Create a photorealistic image
based on the uploaded reference photo.

Preserve the person's identity,
facial features, hairstyle,
body proportions and appearance.

Change the clothing to a
${warna} ${pakaian}.

Clothing style:
${model}

Length:
${panjang}

Pose:
${pose}

Location:
${lokasi}

Natural realistic photography.

Realistic skin texture.

Realistic fabric details.

Natural lighting.

Professional photography.

Aspect ratio ${rasio}.

Keep the person's identity
consistent with the reference image.

Do not add extra people.

High quality photorealistic image.

`;


    document.getElementById(
        "hasilPrompt"
    ).value = prompt.trim();

}


function salinPrompt() {

    const text =
        document.getElementById(
            "hasilPrompt"
        ).value;


    navigator.clipboard.writeText(text);


    alert(
        "Prompt berhasil disalin!"
    );

}
