import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Form.css'


function Form() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [message, setMessage] = useState('');
    const [messageClass, setMessageClass] = useState('');
    const [bmi, setBmi] = useState(0);

    let imagePath = require('../../../src/images/healthy.jpg');
    let calBmi = (event) => {
        event.preventDefault();
        if (weight === 0 || height === 0) {
            alert('Please Enter Valid Weight and Height');
        } else {
            let bmi = weight / (height * height);
            setBmi(bmi.toFixed(1));
            if (bmi < 25) {
                setMessage('You are Under Weight');
                setMessageClass('alert alert-info');
            } else if (bmi >= 25 && bmi < 30) {
                setMessage('You are a Healthy Weight');
                setMessageClass('alert alert-success');
            } else {
                setMessage('You are a Over Weight');
                setMessageClass('alert alert-danger');
            }
        }
    }

    let reload = () => {
        window.location.reload()
    }

    return (
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-5 d-flex align-items-center">
                    <img src={imagePath} alt='' class="w-100 p-3" />

                </div>

                <div class="col-md-6 offset-md-1">
                    <h1>BMI Calculator</h1>
                    <form class="mt-4 mt-md-0" onSubmit={calBmi}>
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Weight (Kg)</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" value={weight} onChange={(event) => setWeight(event.target.value)} />

                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Height (m)</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" value={height} onChange={(event) => setHeight(event.target.value)} />
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary mb-2">Calculate</button>
                            <button type="reset" class="btn btn-primary mb-2" onClick={reload}>Refresh</button>
                        </div>
                        <div class="mb-3 bmi">
                            Your BMI is : {bmi}
                        </div>

                        <div className={messageClass} role="alert">
                            {message}
                        </div>
                    </form>
                </div>
            </div >
        </div >

    );
}

export default Form