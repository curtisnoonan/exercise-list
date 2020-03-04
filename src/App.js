import React, { Component } from 'react';
import './App.css';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component{


  constructor(){

    super();
    this.state = {
      exercises : [
        {
          name: "Dumbbell Bench Press",
          muscle_targeted: "Chest",
          equipment_type: "Dumbbell",
          rating: "average 9.2",
          imgurl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-9e-dumbbell-bench-press-m1-square-600x600.jpg", 
          id: 'ascr1'
        },
        {
          name: "Pushups",
          muscle_targeted: "Chest",
          equipment_type: "Body Only", 
          rating: "average 9.2",
          imgurl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-102a-push-up-m1-square-600x600.jpg", 
          id: 'ascr2'
        },
        {
          name: " Close-Grip Barbell Bench Press ",
          muscle_targeted: "Chest",
          equipment_type: "Barbell",
          rating: "average 9.1", 
          imgurl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-82e-close-grip-bench-press-m1-square-600x600.jpg",
          id: 'ascr3'
        }, 
        {
          name: " Dumbbell Flyes ",
          muscle_targeted: "Chest",
          equipment_type: "Dumbbell",
          rating: "average 9.1",
          imgurl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-31e-dumbbell-chest-fly-m1-square-600x600.jpg", 
          id: 'ascr4'
        },
        {
          name: " Incline Dumbbell Press ",
          muscle_targeted: "Chest",
          equipment_type: "Dumbbell", 
          rating: "average 9.1",
          imgurl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-3n-incline-dumbbell-bench-press-m1-square-600x600.jpg", 
          id: 'ascr5'
        }, 
        {
          name: " Low Cable Crossover ",
          muscle_targeted: "Chest",
          equipment_type: "Cable",
          rating: "average 9.1",
          imgurl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-5c-low-cable-cross-over-m1-square-600x600.jpg",  
          id: 'ascr6'
        },
        {
          name:" Barbell Bench Press - Medium Grip ",
          muscle_targeted: "Chest",
          equipment_type: "Barbell", 
          rating: "average 9",
          imgurl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-81e-bench-press-m1-square-600x600.jpg", 
          id: 'ascr7'
        },
        { 
          name: " Dips - Chest Version ",
          muscle_targeted: "Chest",
          equipment_type: "Other", 
          rating: "average 9",
          imgurl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-2m-chest-dip-m1-square-600x600.jpg", 
          id: 'ascr8'
        },
        {
          name: " Decline Dumbbell Flyes ",
          muscle_targeted: "Chest",
          equipment_type: "Dumbbell",
          rating: "average 9",
          imgurl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-31n-decline-dumbbell-chest-fly-m1-square-600x600.jpg",  
          id: 'ascr9'
        },
        { 
          name: " Bodyweight Flyes ",
          muscle_targeted: "Chest",
          equipment_type: "E-Z Curl Bar",
          rating: "average 9",
          imgurl: "https://www.bodybuilding.com/images/2020/xdb/cropped/2019-xdb-182s-double-bar-roll-out-chest-fly-m1-600x600.jpg",  
          id: 'ascr10'
        },
        {
          name:" Incline Cable Flye ",
          muscle_targeted: "Chest",
          equipment_type: "Cable", 
          rating: "average 9",
          imgurl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-10c-incline-cable-chest-fly-m1-square-600x600.jpg", 
          id: 'ascr11'
        },
        {
          name:" Decline Barbell Bench Press ",
          muscle_targeted: "Chest",
          equipment_type: "Barbell",
          rating: "average 8.9",
          imgurl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-34n-decline-barbell-bench-press-m1-square-600x600.jpg",  
          id: 'ascr12'
        },
        {
          name:" Wide-Grip Barbell Bench Press  ",
          muscle_targeted: "Chest",
          equipment_type: "Barbell", 
          rating: "average 8.9",
          imgurl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-84e-wide-grip-bench-press-m1-square-600x600.jpg", 
          id: 'ascr13'
        },
        {
          name:" Wide-Grip Decline Barbell Bench Press ",
          muscle_targeted: "Chest",
          equipment_type: "Barbell", 
          rating: "average 8.9",
          imgurl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-84e-wide-grip-bench-press-m1-square-600x600.jpg", 
          id: 'ascr14'
        },
        {
          name:" Incline Dumbbell Press Reverse-Grip ",
          muscle_targeted: "Chest",
          equipment_type: "Dumbbell",
          rating: "average 8.9",
          imgurl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-4n-reverse-grip-incline-dumbbell-bench-press-m1-square-600x600.jpg",  
          id: 'ascr15'
        }
      ],
      searchField: ''
    };
  }

  

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const { exercises, searchField } = this.state;
    const filteredExercises = exercises.filter(exercise =>
        exercise.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
      <h1>Exercise List</h1>
        <SearchBox placeholder='search exercises' 
          handleChange={this.handleChange}/>
          <p><br></br></p>
        <CardList exercises = {filteredExercises}>
        </CardList>
      </div>
    );
  }
}

export default App;
