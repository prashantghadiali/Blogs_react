import { useState } from "react";

//Blogging App using Hooks
export default function Blog(){

    // const [title, setTitle] = useState('');
    // const [content, setContent] = useState('');
    const [formData, setFormData] = useState({title: "", content: ""})
    const [blogs, setBlogs] = useState([]);   // emply arr by state
    
    //Passing the synthetic event as argument to stop refreshing the page on submit
    function handleSubmit(e){
        e.preventDefault();
        
        console.log(formData);
        // setBlogs([{title, content}, ...blogs]);     //rest operator using for blogs arr to store
        setBlogs([{title: formData.title, content: formData.content}, ...blogs]);     //rest operator using for blogs arr to store
        setFormData({title: "", content: ""})
        console.log(blogs);
        // setTitle('');
        // setContent('');
    }

    function removeData(i){
        setBlogs(blogs.filter((blog, filterindex) => i !== filterindex));   
    }

    return(
        <>
        <div className="container">
            {/* Heading of the page */}
            <h1>Write a Blog!</h1>

            {/* Division created to provide styling of section to the form */}
            <div className="section">

            {/* Form for to write the blog */}
                <form onSubmit={handleSubmit}>

                    {/* Row component to create a row for first input field */}
                    <Row label="Title">
                            <input className="form-control" name='title' 
                            // value={title}
                            value={formData.title}
                                // onChange={(e) => setTitle(e.target.value)}
                                onChange={(e) => setFormData({title : e.target.value, content: formData.content})}
                                    placeholder="Enter the Title of the Blog here.."/>
                    </Row >

                    {/* Row component to create a row for Text area field */}
                    <Row label="Content">
                            <textarea className="form-control content" name='content' 
                            // value={content}
                            value={formData.content}
                                // onChange={(e) => setContent(e.target.value)}  
                                onChange={(e) => setFormData({title: formData.title, content: e.target.value})}    // we added form data title because it will not remove previous value an replace with content.  
                                    placeholder="Content of the Blog goes here.."/>
                    </Row >

                    {/* Button to submit the blog */}            
                    <button className = "btn btn-primary">ADD</button>
                </form>
                        
            </div>

            <hr/>

            {/* Section where submitted blogs will be displayed */}
            <h2> Blogs </h2>
            {blogs.map((blog, index)=>(
                <div className="blog" key={index}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <button type="button" className="remove btn" onClick={() =>removeData(index)} id={index}>Delete</button>
                </div>
            ))}
        </div>
        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
