import React,{Component} from 'react';
import '../AdminCss/admintecherrecord.css';
import {Link} from 'react-router-dom';
import 'styled-components/dist/styled-components';
import SideNavbar from '../../SideNavMenu';
import DataTable from 'react-data-components/lib/DataTable';
import $ from 'jquery';




class AdminTeacherRecord extends Component{
    constructor(props){
        super(props);
        
        this.state={
            teachers:[],
            
        }
    }
    componentDidMount(){
        const teacher_url = "https://jsonplaceholder.typicode.com/posts";
        
        fetch(teacher_url,{
            method:"GET"
        })
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                this.setState({
                    teachers : data
                });
                });
          
    }
    render() {

        let columns=[
            {title:'Name', prop: 'title'} ,
            {title:'Student', prop:'userId'},
            {title:'Ggez', prop:'userId'},
        ]

        // const columns = [
        //     {
        //         Header: "Name",
        //         accessor: "teacher_name",
        //         Filter: ({ filter, onChange }) => (
        //             <input placeholder="Search User"
        //                 onChange={event => onChange(event.target.value)}
        //                 value={filter ? filter.value : ''}
        //             />
        //         ),
        //     },
        //     {
        //         Header: "Subject",
        //         accessor: "subject_name",
        //         filterable: true,
        //         Filter: ({ filter, onChange }) => (
        //             <input placeholder="Search Name"
        //                 onChange={event => onChange(event.target.value)}
        //                 value={filter ? filter.value : ''}
        //             />
        //         ),

        //     },
        //     {
        //         Header: "Phone NO:",
        //         accessor: "teacher_phone",
        //         Filter: ({ filter, onChange }) => (
        //             <input placeholder="Search Subject"
        //                 onChange={event => onChange(event.target.value)}
        //                 value={filter ? filter.value : ''}
        //             />
        //         ),
        //     },
        //     {
        //         Header: "Profile",
        //         Cell: props => {
        //             return (
        //                 <Link to={{
        //                     pathname : '/adminteacherprofile',
        //                     state: props.original
        //                 }}>
        //                     <button class='btn btn-primary'>See Profile</button>
        //                 </Link>
        //             )
        //         },
        //         style: {
        //             textAlign: 'center'
        //         },
        //         width: 150,
        //         filterable: false
        //     },
        //     {
        //         Header: 'Delete',
        //         Cell: props => {
        //             return (
        //                 <button class='btn btn-danger'>Delete</button>
        //             )
        //         },
        //         style: {
        //             textAlign: 'center'
        //         },
        //         width: 150,
        //         filterable: false
        //     }
        // ]
        return(
          <div>
             <SideNavbar/>
             <div style={{paddingTop:'40px',paddingLeft:'60px',paddingRight:'20px'}}>
             <div class='row '>
                <div class='col-xl-8'>
                    <p class='text' >Teacher Records</p>
                </div>
                <div class='col-xl-4' > 
                <div style={{textAlign:'right',paddingRight:'10px', paddingTop:'10px' }}>
                  <Link to='adminaddteacher'>  
                  <button class='btn btn-primary' >Add Teacher</button></Link>
                </div>
                </div>
                </div>
            
           <div class='col-l-12 reacttable' >  


           <DataTable
                        keys="id"
                        columns={columns}
                        initialData={this.state.teachers}
                         initialPageLength={5}
                         initialSortBy={{ prop: 'Name', order: 'descending' }}
                        pageLengthOptions={[ 5, 20, 50 ]}
                       / >
         
               </div>
             </div>
             </div>
        )
    }
}



export default AdminTeacherRecord;