const form = document.getElementById("rec-form");

const recContainer = document.querySelector(".rec");

const popup = document.getElementById("popup");

form.addEventListener("submit", function(event){

    event.preventDefault();

    // lấy dữ liệu từ form
    const name = document.getElementById("name").value;

    const message = document.getElementById("message").value;

    // tạo recommendation mới
    const newRec = document.createElement("div");

    newRec.classList.add("rec-box");

    newRec.innerHTML = `
        <div class="rec-text">
            <strong>${name}</strong><br><br>
            ${message}
        </div>
    `;

    // thêm recommendation mới
    recContainer.appendChild(newRec);

    // hiện popup
    popup.style.display = "flex";

    // tự đóng popup sau 2 giây
    setTimeout(function(){

        popup.style.display = "none";

    }, 2000);

    // reset form
    form.reset();

});