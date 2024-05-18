const data = 
[
  {
    Title:"3 IDIOTS",
    Poster: "https://bcomber.org/wp-content/uploads/2021/10/Screen-Shot-2021-10-26-at-6.48.45-AM-900x499.png",
    Year: 2009,
    Release_Date:"25 December 2009",
    Duration:"171 minutes",
    Actors:"Aamir Khan, Sharman Joshi, R.Madhavan, Kareena Kapoor, Boman Irani, Om Vaidya, Mona Singh",
    Director:"Rajkumar Hirani",
    Geners: "Comedy, Drama, Adventure, Romance, Melodrama, Friendship, Motivational",
    Languages:"Hindi",
    Box_office_collection:"400.61 crore rupees",
  }
]
const mainDiv = document.getElementById("movies")
function displayData (data)
{
    data.forEach (function (ele)
    {
       const someDiv = document.createElement("div") // This creates div element <div></div>
       someDiv.classList.add("movies") // This creates class for the div element i.e <div class="movies"></div>
       const heading = document.createElement('h1') // This creates h1 element i.e <h1></h1>
       heading.textContent = ele.Title
       const image = document.createElement('img')
        image.setAttribute('src', ele.Poster)
        const desc = document.createElement('p')
        desc.textContent="Released:"+ ele.Year
        image.alt=ele.Title
        someDiv.append(heading,image,desc)
        mainDiv.appendChild(someDiv)
    })
}
displayData(data)
