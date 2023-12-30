//allows user to add hog
import React from "react";

export default function AddHogForm({submitHog}){

    const [formData, setFormData] = React.useState({
        name: "",
        weight: 0,
        specialty: "",
        image: ""
    })

    function handleInput(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        if(formData.name.length !== 0 && formData.weight !== 0){
            submitHog({
                ...formData,
                greased: false,
                "highest medal achieved": "none :("
            })
        }
        setFormData({
            name: "",
            weight: 0,
            specialty: "",
            image: ""
        })
    }

    return(
        <form style={{margin: '15px'}}>
            
        <h2>Enroll Your Pig Today!</h2>

            <div className="ui labeled input">
                <div className="ui label">
                    Name
                </div>
                <input type="text" placeholder="Piggly Wiggly" name="name"
                value={formData.name} onChange={handleInput}/>
            </div>

            <div className="ui labeled input" style={{margin: "5px"}}>
                <div className="ui label">
                    Weight (lbs)
                </div>
                <input type="number" placeholder="15" name="weight"
                value={formData.weight} onChange={handleInput}/>
            </div>

            <div className="ui labeled input" style={{margin: "5px"}}>
                <div className="ui label">
                    Special Talent
                </div>
                <input type="text" placeholder="Skydiving" name="specialty"
                value={formData.specialty} onChange={handleInput}/>
            </div>

            <div className="ui labeled input" style={{margin: "5px"}}>
                <div className="ui label">
                    Selfie URL
                </div>
                <input type="text" placeholder="pigphotos.com"  name="image"
                value={formData.image} onChange={handleInput}/>
            </div>

            <button className="ui right labeled icon button" type="submit" onClick={handleSubmit}>
                <i className="right arrow icon"></i>
                Enroll
            </button>
        </form>
    )
}