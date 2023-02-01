let saveEl =  document.getElementById("save-el")
// Using this [[[document.getElementById("element ID here").innerText]]] I can make a request to the document for the specific element by the ID and then target it. I can also target the (.innerText) attribute to specify the content within the element
    //Note that there are other attributes other than .innerText       
let countEl = document.getElementById("count-el")  
let count = 0

function increment() {
    // console.log("clicked")
    // console.log(count)
    count += 1
    countEl.textContent = count
}

function save() {
    // console.log("clicked")
    // console.log()
    let saveCount = " " + count + " - "
    saveEl.textContent += saveCount
    count = 0
    countEl.textContent = count

}

