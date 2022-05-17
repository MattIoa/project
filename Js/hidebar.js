const hidebtndisc = document.getElementById('btndisc');

hidebtndisc.addEventListener('click', hidebar)

function hidebar() {
    document.querySelector(".bar-container").style.display = "none";

}
