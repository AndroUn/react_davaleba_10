const Card = (image)=>{
    return (
    <div class="portfolio">
        <div class="text_info">
            <h1 class="header">Hi! My name is Andro.</h1>
            <h1 class="header">I'm front-end developer.</h1>

            <h2 class="header_1">My knowledges:</h2>
            <ul class="skills"> 
                <li class="el">HTML</li>
                <li class="el">CSS (SASS/SCSS)</li>
                <li class="el">Javascript</li>
                <li class="el">React Js</li>
                <li class="el">Adobe Photoshop</li>
                <li class="el">Adobe Premiere Pro</li>
            </ul>

        </div>

        <div class="img">
            <img src={image} alt="card"></img>
        </div>
    </div>
    )
}

export default Card