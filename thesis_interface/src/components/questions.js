import { useState } from "react"

const PostQuestions = (props) => {

    const [selectedValue, setSelectedValue] = useState('')

    const Choices = [
        { title: props.choice1 },
        { title: props.choice2 },
        { title: props.choice3 }
    ]

    const handleChange = (e) => {
        setSelectedValue(e.target.value)
    }

    const handleSubmit = () => {
        props.submit(props.id, selectedValue)
    }

    return ( 
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="bg-black w-full h-full opacity-75"></div>
            <div className="bg-white flex flex-col items-center md:py-6 lg:py-12 px-14 absolute w-3/6">
                <p className="font-mono font-bold text-cyan-blue text-4xl 2xl:text-5xl 2xl:pb-3 text-center">{props.question}</p>
                {Choices.map((choice, index) => (
                    <div key={index} className='border-2 border-cyan-blue bg-#D9D9D9 p-2 pl-5 w-4/5 flex gap-4 mt-3'>
                        <input type="radio" value={choice.title} checked={selectedValue === choice.title} onChange={handleChange} className="scale-150"/>
                        <label className="font-mono font-bold text-cyan-blue xl:text-xl 2xl:text-4xl">{choice.title}</label>
                    </div>
                ))}
                <div className="flex justify-end mt-5 gap-11">
                    <button type="submit" className="bg-cyan-blue font-bold rounded-3xl text-white p-4 2xl:text-2xl xl:w-32 2xl:w-40" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div> 
    );
}
 
export default PostQuestions;