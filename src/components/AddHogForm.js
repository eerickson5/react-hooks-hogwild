//allows user to add hog
import React from "react";

export default function AddHogForm(){

    const [formData, setFormData] = React.useState({
        name: "",
        weight: 0,
        specialty: "",
        image: ""
    })

    function onInput(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return(
        <form style={{margin: '15px'}}>
            
        <h2>Enroll Your Pig Today!</h2>

            <div class="ui labeled input">
                <div class="ui label">
                    Name
                </div>
                <input type="text" placeholder="Piggly Wiggly" name="name"
                value={formData.name} onChange={onInput}/>
            </div>

            <div class="ui labeled input" style={{margin: "5px"}}>
                <div class="ui label">
                    Weight (lbs)
                </div>
                <input type="number" placeholder="15" name="weight"
                value={formData.weight}/>
            </div>

            <div class="ui labeled input" style={{margin: "5px"}}>
                <div class="ui label">
                    Special Talent
                </div>
                <input type="text" placeholder="Skydiving" name="specialty"
                value={formData.specialty}/>
            </div>

            <div class="ui labeled input" style={{margin: "5px"}}>
                <div class="ui label">
                    Selfie URL
                </div>
                <input type="text" placeholder="pigphotos.com"  name="image"
                value={formData.image}/>
            </div>
        </form>
    )
}