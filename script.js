const q1 = document.getElementById('q1-btn')
const q2 = document.getElementById('q2-btn')
const q3 = document.getElementById('q3-btn')
const q4 = document.getElementById('q4-btn')
const q5 = document.getElementById('q5-btn')

q1.addEventListener('click', q1Ans)
q2.addEventListener('click', q2Ans)
q3.addEventListener('click', q3Ans)
q4.addEventListener('click', q4Ans)
q5.addEventListener('click', q5Ans)

function q1Ans() {
    q1.textContent = "1940";
}
function q2Ans() {
    q2.textContent = "2 Feb 1943"
}
function q3Ans() {
    q3.textContent = "Panzer IV"
}
function q4Ans() {
    q4.textContent = "6 Jun 1944"
}
function q5Ans() {
    q5.textContent = "Winston Churchill"
}
