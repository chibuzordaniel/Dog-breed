// dog-breeds update date


const date = new Date;
// console.log(date.toLocaleDateString())
document.getElementById('dog').innerHTML = date.toDateString();








// dog-breeds fetch Api 

const baseUrl = `https://dog.ceo/api/breeds/list`;
const selectBreed = document.querySelector('.breed');
const dogran = document.querySelector('.dog-ran');
const dogCard = document.querySelector('.dog-card');
const  breed = document.querySelector('.breed')
const displayNumber = document.querySelector('.display-number')
const africa = 'affenpinscher';









//asynchrous function

 const dogBreed = 'affenpinscher'

const getNumberOfImages = async (e) => {
  
for (var i=0; i<=100; i++) {
  console.log(i);
  
}

  totalNumberOfImages = e.target.value;
  try {
    const data = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random/${totalNumberOfImages}`);
    const defaultData = await data.json();
    console.log(defaultData.message)
    // Callback function
    randomImages(defaultData.message)

  } catch (error) {
    console.error(error.message, 'try again...')
  }
}

displayNumber.addEventListener('click', getNumberOfImages)





// breed name changing
breed.addEventListener('click', async  () => {
  // console.log(breed.value)
  document.getElementById('dog-hound').innerHTML = breed.value;
})





// The randomize image display
const hound = 'affenpinscher';

dogran.addEventListener('click', async () => {
  try{
    const data = await fetch(`https://dog.ceo/api/breed/${hound}/images/random/12`);
    const defaultData = await data.json();
    // console.log(defaultData.message)
    randomImages(defaultData.message)

  } catch (error) {
    console.error(error.message, 'try again...')
  }
});







const getBreedName = (e) => {
    const value = e.target.value;
    getBreedByName(value)
   
}



selectBreed.addEventListener('click', getBreedName);

const getBreedByName = async (name, num = 12) => {
    try {
      const data = await fetch(`https://dog.ceo/api/breed/${name}/images/random/${num}`)
      const image = await data.json()
    //   console.log(image?.message)
      randomImages(image?.message)
      
    } catch (error) {
      console.log(error.messge, 'Check again')
    }
} 






    const defaultDogList = async () => {
    try {
        const data = await fetch(`https://dog.ceo/api/breed/${africa}/images/random/12`);
        const defaultData = await data.json();
        // console.log(defaultData.message)
        randomImages(defaultData.message)

    } catch (error) {
        console.error(error.message, 'try again...')
    }
    }

  defaultDogList()


  // Get dog image
const randomImages = (data) => {
    const dogImage = `
      ${data?.map((url) => (`<img src=${url} alt="dog_image">`))}`
      dogCard.innerHTML = dogImage;
  }


// List of Breeds


const getListOfBreeds = async () =>{
  try {
    const data = await fetch(baseUrl)
    const res = await data.json();
  //   console.log(res.message)
    selectCategory(res.message)
  } catch (error) {
    console.error(error.message, 'Not found.')
  }
};


const selectCategory = (data) => {
    const breedOption = `
      ${data?.map((el) => (`<option value=${el}>${el}</option>`))}`
      selectBreed.innerHTML = breedOption;
  }

  getListOfBreeds()