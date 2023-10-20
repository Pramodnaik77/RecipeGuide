import React from 'react'
import "../styles/login.css"
import { FaStar } from "react-icons/fa";
import {useState} from "react"
import { API } from '../api-service';
import { useCookies } from 'react-cookie';
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};
export default function Review({id, recipe, ingredient}) {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    // const [rating, setRating] = useState(recipe.rating);
    const [inputValue, setInputValue] = useState('')
    const [token] = useCookies(['recipe_token']);

    const st = Array(5).fill(0)


    const rate_star = () => {
      const stars = [];

      for (let i = 0; i < recipe.rating; i++) {
        stars.push(<FaStar color={colors.orange}/>);
      }

      for (let i = recipe.rating + 1; i <= 5; i++) {
        stars.push(<FaStar color={colors.grey}/>);
      }
      console.log("ratinhg ",recipe.rating);
      console.log("ratinhg ",stars);
      return stars;
    };

    const handleClick = value => {
      setCurrentValue(value)
    }
    const handleMouseOver = newHoverValue => {
      console.log('newHoverValue ',newHoverValue)
      if(newHoverValue !== undefined)

        setCurrentValue(newHoverValue)
      setHoverValue(newHoverValue)
    };
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }
    const ingredients = ingredient.map( (ingd,index) => {
      return <li key={index}>{ingd.name}</li>;
    });
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
    const handleSubmit = () => {
      const formData = { 'rating': currentValue, 'review': inputValue};
      API.setReview(id, formData, token);
      window.location.reload();
    }

return(

  <div className="content">

      {/* title of recipe */}

      <div className="title" id="yn">
          <h1 className="title1">{recipe.name}</h1>
      </div>

      {/* image of recipe */}

      <img src={recipe.image} alt="" />


            <div className="recipe-details">

                            {/* instruction of recipe */}

                          <div className="instructions">
                              <h2>Instructions</h2><br />
                              <h4>{recipe.description}</h4>
                          </div>
                          <div className="ingredients">
                            <h2>Ingredients</h2><br />
                              <ul>
                              {ingredients}
                              </ul>
                          </div>
                          <div className='video'>
                              <h2>Video Tutorial</h2>
                              <br />
                              <iframe width="560" height="315" src={recipe.video_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                          </div>
                            <div style={styles.container}>
                              <h2> Ratings and Review</h2>

                              {recipe.rating <= 0 && <div style={styles.container}>
                                <div style={styles.stars}>
                                  {st.map((_, index) => {
                                    return (
                                      <FaStar
                                        key={index}
                                        size={15}
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() => handleMouseOver(index + 1)}
                                        onMouseLeave={handleMouseLeave}
                                        color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                        style={{
                                          marginRight: 10,
                                          cursor: "pointer",
                                        paddingTop:4,
                                        }}
                                      />
                                    )
                                  })}
                                </div>




                                <textarea
                                  required
                                  placeholder="What's your experience?"
                                  style={styles.textarea}
                                  value={inputValue}
                                  onChange={handleInputChange}
                                />

                                <button
                                  className='flex flex-col'
                                  style={styles.button}
                                  onClick={handleSubmit}
                                >
                                  Submit
                                </button>

                              </div>
                            }
                              {recipe.review !=='' &&
                                  <div class="test-box-container">
                                  <div class="test-box">
                                    <div class="box-top">
                                      <div class="profile">
                                          {/* <div class="profile-img">
                                            <img src={recipe.img} alt="not"></img>
                                          </div> */}
                                          <div class="name-user">
                                            <strong>nishanth</strong>
                                            <span>@nishu</span>
                                          </div>
                                      </div>
                                      {recipe.rating > 1 &&
                                        // <ul>
                                        //   {filled}
                                        // </ul>
                                          <div class="reviews">
                                              {rate_star()}
                                          </div>
                                      }
                                    </div>
                                    <div class="comment">
                                      <p>{recipe.review}</p>
                                    </div>
                                  </div>
                                </div>

                              }

                            </div>


                              <div style={{width:600,color:"#0000",marginTop:20}}><hr /></div>

                            {/* top comments of recipe */}

                                <div class="test-heading">
                                    <h4>Top Comments
                                    </h4>
                                </div>
                                <div class="test-box-container">
                                  <div class="test-box">
                                    <div class="box-top">
                                      <div class="profile">
                                          <div class="profile-img">
                                            <img src={recipe.img} alt="not"></img>
                                          </div>
                                          <div class="name-user">
                                            <strong>nishanth c</strong>
                                            <span>@nishu</span>
                                          </div>
                                      </div>
                                      <div class="reviews">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>

                                      </div>
                                    </div>
                                    <div class="comment">
                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos provident repellendus, maxime atque laboriosam cupiditate. Culpa natus maxime neque asperiores sit impedit? Dolore, amet vitae.</p>
                                    </div>
                                  </div>
                                </div>

        </div>
  </div>

      )
}
const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "left"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 400,
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 8,
      width: 100,
      padding: 10,
     color:'#000000 ',
     backgroundColor:"#ff0056",
     cursor: 'pointer'
    }

  };