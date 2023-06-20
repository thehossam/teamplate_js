// =============================================================
// select elements

let colorOption = localStorage.getItem("color_option")

let backgroundOption = localStorage.getItem("background-option")

let listLi = document.querySelectorAll(".option-box ul li")

let landing = document.querySelector(".landing-page");

let landingImg = ['imj_1.jpg', 'imj_2.jpg', 'imj_3.jpg', 'imj_4.jpg', 'imj_5.jpg'];

let changeBack = document.querySelectorAll(".option-box .option-back span")

let optionBackground = true;

let clear;

document.querySelector(".settings-box i").onclick = () => {

  document.querySelector(".settings-box").classList.toggle("open")

}

if (colorOption !== null) {

  document.documentElement.style.setProperty("--main-color", colorOption)

  listLi.forEach((li) => {

    li.classList.remove("active")

    if (li.dataset.color === colorOption) {

      li.classList.add("active")
    }

  })

}

if (backgroundOption !== null) {

  if (backgroundOption === "true") {

    optionBackground = true;

  } else {

    optionBackground = false;

  }

  changeBack.forEach(e => {

    e.classList.remove("active")

  })

  if (backgroundOption === "true") {

    document.querySelector(".yas").classList.add("active");

  } else if (backgroundOption === "false") {

    document.querySelector(".no").classList.add("active");

  }
}
listLi.forEach((li) => {

  li.addEventListener("click", (e) => {

    listLi.forEach((li) => {

      li.classList.remove("active")

    })

    e.target.classList.add("active")

    e.target.dataset.color

    document.documentElement.style.setProperty("--main-color", e.target.dataset.color)

    localStorage.setItem("color_option", e.target.dataset.color)

  })

})
randomBackground()

changeBack.forEach((span) => {

  span.addEventListener("click", (e) => {

    changeBack.forEach((span) => {

      span.classList.remove("active")

    })

    e.target.classList.add("active")
    if (e.target.dataset.background === "yas") {

      optionBackground = true;

      randomBackground()

      localStorage.setItem("background-option", true)

    } else {

      optionBackground = false;

      clearInterval(clear)

      localStorage.setItem("background-option", false)
    }


    // console.log(localStorage.getItem("background-option"))

  })

})

function randomBackground() {

  if (optionBackground === true) {

    clear = setInterval(() => {

      let number = Math.floor(Math.random() * landingImg.length)

      landing.style.backgroundImage = `url("../image/${landingImg[number]}")`

    }, 5000);

  }

}
// ============================================================================
let spans = document.querySelectorAll(".the-progress .prog")
let ourSkills = document.querySelector(".the-progress")

window.onscroll = function () {
  if (this.pageYOffset > (ourSkills.offsetTop + ourSkills.offsetHeight - this.innerHeight)) {
    spans.forEach((span) => {
      span.style.width = span.dataset.progress
    })

  }
}
// select Element form the gallery
let imgs = document.querySelectorAll(".img .content img");

imgs.forEach((img) => {
  img.addEventListener("click", (e) => {

    let div = document.createElement("div")
    // add class name on the overly element
    div.className = "overly-gallery"
    // add the overly in the body
    document.body.appendChild(div)
    // create content,s the imgs 
    let content = document.createElement("div")
    // add class name on the content element
    content.className = "content"
    // add element on overly
    div.appendChild(content)
    // create overly element
    if (e.target.alt !== null) {
      // create element the name
      let altDiv = document.createElement("h3")
      // add class name in the element
      altDiv.className = "alt-div";
      // add the name in the element
      content.appendChild(altDiv)
      // create the text node
      let textAlt = document.createTextNode(e.target.alt)
      // add the text node in element
      altDiv.appendChild(textAlt)
    }
    // create the element img 
    let image = document.createElement("img")
    // add img in the content
    content.appendChild(image)
    // change course image
    image.src = e.target.src
    // create button close
    let close = document.createElement("div")
    // add class name on the element
    close.className = "close"
    // create the text node
    close.appendChild(document.createTextNode("x"))
    // add button close in the content
    content.appendChild(close)
  })
})
// close popup
document.addEventListener("click", (e) => {

  if (e.target.className == "close") {
    // remove the current popup
    e.target.parentNode.remove()
    // remove overly
    document.querySelector(".overly-gallery").remove()
  }
})
// =====================================
// select allLinks form html page 
let bullet = document.querySelectorAll(".nav-bullets .bullet");
let allLinks = document.querySelectorAll(".links a");
// create function links
function link(a) {
  a.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
}

link(allLinks)
link(bullet)

// function hide and block style bullets
// 1_select spans
let span = document.querySelectorAll(".option-box .option-bullets span")
// 2_select bullets
let bullets = document.querySelector(".nav-bullets")
// 3_set option-bullet for local storage
let bulletOption = localStorage.getItem("option-bullet")
// create function handle for bullets
span.forEach((sp) => {
  sp.addEventListener("click", (e) => {
    span.forEach((r) =>{
      r.classList.remove("active")
    })
    if (e.target.dataset.show === "show") {
      bullets.style.display = "block"
      localStorage.setItem("option-bullet", "show")
      // sp.classList.remove("active")
      e.target.classList.add("active")
    } else {
      bullets.style.display = "none"
      localStorage.setItem("option-bullet", "hide")
      // e.target.classList.remove("active")
      e.target.classList.add("active")

    }
  })
})
if (bulletOption !== null) {
  if (bulletOption == "show") {
    bullets.style.display = "block"
  }else {
    bullets.style.display = "none"
  }
  span.forEach((e) => {
    e.classList.remove("active")
    if (e.dataset.show == bulletOption) {
      e.classList.add("active")
    }
  })
}

// handle button for reset sittings
document.querySelector(".reset").onclick = function () {

  localStorage.clear()
  window.location.reload()

}

