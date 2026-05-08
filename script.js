// Har bir "AI tahlili" tugmasiga event qo‘shamiz
document.querySelectorAll(".analyze-btn").forEach(btn => {
  btn.addEventListener("click", async () => {
    // Tugmadagi data-image atributidan rasm manzilini olamiz
    const imageUrl = btn.getAttribute("data-image");

    try {
      // Backendga POST so‘rov yuboramiz
      const response = await fetch("/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl })
      });

      // Javobni JSON ko‘rinishida o‘qiymiz
      const data = await response.json();

      // AI tahlil natijasini alert oynasida chiqaramiz
      alert(data.candidates[0].content.parts[0].text);
    } catch (error) {
      alert("Xatolik yuz berdi: " + error.message);
    }
  });
});
