import { useState } from "react";

const StudentForm = () => {
    const [name, setName] = useState();
    const [mail, setMail] = useState();
    const [website, setWebsite] = useState();
    const [gender, setGender] = useState();
    const [skills, setSkills] = useState();
    const [img, setImg] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const details = { name, mail, website, gender, skills, img };
        fetch('http://localhost:8000/details', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(details)
        }).then(() => {
            console.log('blog');
        })
    }

    return (
        <>
            <br /><br /><br /><br />
            <form onSubmit={handleSubmit}>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="name" class="form-control" value={name} onChange={(e) => setName(e.target.value)} id="inputEmail3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" value={mail} onChange={(e) => setMail(e.target.value)} id="inputEmail3" />
                    </div>
                </div>
                {/* <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Website</label>
                    <div class="col-sm-10">
                        <input type="url" name="" value={website} onChange={(e) => setWebsite(e.target.value)} id="" />
                    </div>
                </div> */}
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Gender</label>
                    <div class="col-sm-10">
                        <select name="" value={gender} onChange={(e) => setGender(e.target.value)} id="">
                            <option value="-"></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Skills</label>
                    <div class="col-sm-10">
                        <select name="" value={skills} onChange={(e) => setSkills(e.target.value)} id="">
                        <option  value="-"></option>

                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="HTML CSS JavaScript">Web Dev</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Image</label>
                    <div class="col-sm-10">
                        <input type="text" name="" id="" value={img } onChange={(e) => setImg(e.target.value)}/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
            </form><br /><br /><br /><br /><br />
        </>
    );
}

export default StudentForm;