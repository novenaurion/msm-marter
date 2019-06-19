import React, { Component } from 'react';
import '../AdminCss/studentrecrod.css';
import { Link } from 'react-router-dom';
import { Col, Table } from 'react-bootstrap';
import ReactTable from 'react-table';
import 'jquery-ui-bundle';
import $ from 'jquery';
import 'react-table/react-table.css';
import Navbar from '../../SideNavMenu';
class StudentRecord extends Component {

    pagination(maxrow){
        
        var table = '#page'
        $('.pagination').html('')

                var trnum = 0;

                var maxrow = parseInt($(this).val());
                console.log(maxrow);


                var totalrow = $(table + ' tbody tr').length;
                $(table + ' tr:gt(0)').each(function () {

                    trnum++;
                    if (trnum > maxrow) {
                        $(this).hide();

                    }
                    if (trnum <= maxrow) {
                        $(this).show();
                    }

                })
                if (totalrow > maxrow) {
                    var pagenum = Math.ceil(totalrow / maxrow);
                    for (var i = 1; i <= pagenum;) {



                        $('.pagination').append('<li class="page-item" data-page="' + i + '">' + '<a href="#" class="page-link" >' + i++ + '</a></li>').show();
                    }
                }
                $('.pagination li:first-child').addClass('active');
                $('.pagination li').on('click', function () {
                    var pageNum = $(this).attr('data-page');
                    var trIndex = 0;
                    $('.pagination li').removeClass('active');
                    $(this).addClass('active');
                    $(table + ' tr:gt(0)').each(function () {
                        trIndex++;
                        if (trIndex > (maxrow * pageNum) || trIndex <= ((maxrow * pageNum) - maxrow)) {
                            $(this).hide()

                        } else {
                            $(this).show()
                        }

                    });

                });


    }

    constructor(props) {
        super(props);

        this.state = {
            students: [],
            displayNone: 0
        }
    }

    componentDidMount() {




        $(function () {
            var table = '#page'



            $('#maxRows').on('change', function () {

                $('.pagination').html('')

                var trnum = 0;

                var maxrow = parseInt($(this).val());
                console.log(maxrow);


                var totalrow = $(table + ' tbody tr').length;
                $(table + ' tr:gt(0)').each(function () {

                    trnum++;
                    if (trnum > maxrow) {
                        $(this).hide();

                    }
                    if (trnum <= maxrow) {
                        $(this).show();
                    }

                })
                if (totalrow > maxrow) {
                    var pagenum = Math.ceil(totalrow / maxrow);
                    for (var i = 1; i <= pagenum;) {



                        $('.pagination').append('<li class="page-item" data-page="' + i + '">' + '<a href="#" class="page-link" >' + i++ + '</a></li>').show();
                    }
                }
                $('.pagination li:first-child').addClass('active');
                $('.pagination li').on('click', function () {
                    var pageNum = $(this).attr('data-page');
                    var trIndex = 0;
                    $('.pagination li').removeClass('active');
                    $(this).addClass('active');
                    $(table + ' tr:gt(0)').each(function () {
                        trIndex++;
                        if (trIndex > (maxrow * pageNum) || trIndex <= ((maxrow * pageNum) - maxrow)) {
                            $(this).hide()

                        } else {
                            $(this).show()
                        }

                    });

                });

            });








            $(".search_input").on("keyup", function () {

                $("#noData").remove();
                var value = $(this).val();
                var patt = new RegExp(value, "i");
                var sw = 0;
                var counter = 0;
                $('.student_table').find('tr').each(function () {
                    counter++;
                    if (!($(this).find('td').text().search(patt) > -1)) {
                        $(this).hide();
                        sw++;
                    } else if (($(this).find('td').text().search(patt) > -1)) {
                        $(this).show();
                    }
                });
                if (sw == counter) {
                    $(".student_table").append(`<tr id="noData">
                    <td colspan="6" class='text-center bg-info text-white'>No Record Found</td>
                  </tr>`);
                } else {
                    $("#noData").remove();
                }



            });







        });




        //Fetch Students data from API
        const studentURL = "https://jsonplaceholder.typicode.com/posts";

        fetch(studentURL)
            .then((response) => {
                return response.json();
            })
            .then((allStudentsData) => {
                this.setState({
                    students: allStudentsData
                }, () => {
                    console.log(this.state.students);
                })
            })
    }

    editEventHandler = (obj) => {
        console.log('Edit Event', obj)
    }
    deleteEventHandler = (obj) => {
        console.log('Data : ', obj);
        const delete_student_url = 'http://localhost:8000/students/deleteStudent/' + obj.student_id;
        fetch(delete_student_url, {
            method: 'DELETE',
        })
            .then(() => {
                console.log('Delete Success');
                // window.location.reload();
            })
    }
    render() {
        let students = this.state.students;
        let table_students = students.map((students, item) =>

            <tr key={item}>
                <td>{students.userId}</td>
                <td>{students.title}</td>
                <td>{students.id}</td>
                <td>{students.userId}</td>
                <td>{students.userId}</td>
                <td>{students.id}</td>
            </tr>
        );
        // const columns=[
        //     {
        //         Header : 'Roll NO',
        //         accessor : 'student_roll_no',
        //     },
        //     {
        //         Header : 'Student Name',
        //         accessor : 'student_name'
        //     },
        //     {
        //         Header : 'Student Year',
        //         accessor : 'student_year'
        //     },
        //     {
        //         Header : 'Edit Student',
        //         Cell : props =><Link to={{
        //             pathname:'/adminstudentprofile',
        //             state : props.original
        //         }}>
        //             <button
        //             onClick={()=>this.editEventHandler(props.original)} 
        //             className='btn btn-info w-75 ml-4'>
        //             Edit
        //         </button>
        //         </Link>
        //     },
        //     {
        //         Header : 'Delete Student',
        //         Cell : props => <button 
        //             onClick={()=>this.deleteEventHandler(props.original)}
        //             className='btn btn-danger w-75 ml-4'>
        //             Delete
        //         </button>
        //     }
        // ]
        return (
            <div>
                <Navbar />

                <div style={{ paddingTop: '40px', paddingLeft: '60px', paddingRight: '20px' }}>
                    <div className='row '>
                        <div className='col-xl-8'>
                            <p className='text' >Student Records</p>
                        </div>
                        <div className='col-xl-4' >
                            <div style={{ textAlign: 'right', paddingRight: '10px', paddingTop: '10px' }}>
                                <Link to='adminaddstudent'>
                                    <button className='btn btn-primary' >Add Student</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-12 reacttable' >

                        <div>
                            <h4>Select Number of Row</h4>
                            <div className='form-group'>
                                <select name='state' id="maxRows" className='form-control' style={{ width: 150 }}>

                                    <option vlaue='5'>5</option>
                                    <option vlaue='10'>10</option>
                                    <option vlaue='15'>15</option>
                                    <option value='20'>20</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-12 d-flex justify-content-end mb-3'>
                            <form>
                                <div className="input-group">
                                    <input type="search" placeholder="Search Here..." className="form-control search_input" />

                                    <div className="input-group-append">
                                        <div className="input-group-text bg-primary">
                                            <div className="fas fa-search text-white"></div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <table className='table table-bordered table-striped table-sm-responsive' id="page">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Student Name</th>
                                    <th>Father Name</th>
                                    <th>Class</th>
                                    <th>Year</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody className='student_table'>

                                {table_students}

                            </tbody>
                        </table>

                        <div className='pagination-container'>
                            <nav>
                                <ul className='pagination'></ul>
                            </nav>
                        </div>





                        {/* <ReactTable 
               columns={columns}
               data={this.state.students}
               filterable
               defaultPageSize={10}
               noDataText={'No Student In Record'}
               >
               </ReactTable> */}
                    </div>
                </div>
            </div>
        )
    }
}



export default StudentRecord;