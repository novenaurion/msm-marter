import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import SideNavMenu from "../../SideNavMenu";


class AdminAddSubject extends Component {

    componentDidMount() {

        var selectedclassName;
        $(document).ready(function () {

            $("select.selectclassName").change(function () {
                selectedclassName = $(this).children("option:selected").val();

            })


            $('#save').click(function () {

                if (selectedclassName == null) {
                    selectedclassName = "Class A";

                }
                console.log(selectedclassName)
                document.querySelector('.cardsave').classList.remove('invisible'); 
                var editsubject = $('.editsubject');
                var editsubjecthtml = " \
                <div className='row'> \
                <div className='col-xl-4  col-lg-4 col-sm-4'> \
                    <p style={{ paddingTop:100}}>"
                    + selectedclassName +  
                    '</p> \
                        </div> \
                            <div className="col-xl-3 col-lg-3 col-sm-3"> \
                                <button class="btn btn-primary">Edit</button>   \
                            </div> \
                            <div className="col-xl-3 col-lg-3 col-sm-3"> \
                                <button class="btn btn-danger">Delete</buttton>\
                            </div> \
                        </div>'
                editsubject.append(editsubjecthtml);

            })


            $("select.selectNumofSubject").change(function () {
                var numofSubject = $(this).children('option:selected').val();
                var input = $('.input');
                input.remove();
                console.log(numofSubject);
                for (var i = 1; i <= numofSubject; i++) {
                    var wrapper = $('.field_wrapper');
                    var fieldHTML = ' <div class="mt-3 ml-2 input"> <div class = "input-group"> <input class = "form-control" placeholder="Enter Subject Name" type="text" name="field_name[]" value="" /><div class = "input-group-append"><button class = "btn btn-primary">Subject Name</button></div></div></div>'
                    wrapper.append(fieldHTML);

                }
            })
        });
    }
    render() {
        return (
            <div>
                <SideNavMenu/>
                <div className='container-fluid ml-5'>
                    <div className='row'>
                        <div className='col-xl-8 col-lg-8'>
                            <div className='mt-3'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='row'>
                                        <div className='col-xl-6 col-lg-6'>
                                        
                                                <div className='mt-3 ml-2'>
                                                    <div className=' form-group '>
                                                        <label>Select a className</label>
                                                        <select name="className"  id="className" className='selectclassName form-control'>
                                                            <option selected>className A</option>
                                                            <option>className B</option>
                                                            <option>className C</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-6 col-lg-6'>
                                                <div className='mt-3 ml-2'>
                                                    <div className='form-group'>


                                                        <label>Selct Number of Subject</label>
                                                        <select name="subject" className='selectNumofSubject form-control'id="subject">
                                                            <option selected>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                            <option>7</option>
                                                            <option>8</option>


                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div className='mt-3'>
                                            <div className='row'>

                                                <div className='card col-xl-12 col-lg-12'>
                                                    <div className='card-body'>

                                                        <div className="field_wrapper">

                                                            <div className='mt-3 ml-2 input'>
                                                                <div className = "input-group">
                                                                <input className = "form-control" placeholder='Enter Subject Name' type="text" name="field_name[]" value="" />

                                                                    <div className = "input-group-append">
                                                                        <button className = "btn btn-primary">Subject Name</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>

                                            </div>
                                            <div className='mt-3'>
                                                <button id='save' className='btn btn-primary col-xl-12 col-lg-12'>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 invisible cardsave' style={{ paddingRight:100}}>
                            <div className='mt-3'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='editsubject'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default AdminAddSubject;