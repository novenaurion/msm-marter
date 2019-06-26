import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideNav from "../../SideNavMenu";
import $ from 'jquery';
import DataTable from 'react-data-components/lib/DataTable';
import 'react-data-components/css/table-twbs.css';

class AdminParent extends Component {
    constructor( ) {

        super( );

        this.state = {
            parents: []
        }
    }

    componentDidMount() {


        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url, {
            method: "GET"
        }).then(res => res.json()).then(parent => {
            this.setState({ 
                parents: parent
             })
            
        });

       
    }

    onDelEvent(id) {
        const index = this.state.parents.findIndex(parents => {
            return parents.id === id;
        })
        this.state.parents.splice(index, 1);
        this.setState({ parents: this.state.parents });
    }

    render() {
        
       
        let columns=[
            {title:'Name', prop: 'title'} ,
            {title:'Student', prop:'userId'},
            {title:'Ggez', prop:'userId'},
        ]
               
        return (
            <div>
                <SideNav />
                <div style={{ paddingTop: '40px', paddingLeft: '60px', paddingRight: '20px' }}>
                    <div className='row'>
                        <div className='col-xl-8'>
                            <p className='text' >Guardian Records</p>
                        </div>

                        <div className='col-xl-4 d-flex justify-content-md-start justify-content-xl-end' >
                            
                                <Link to='adminaddparent'>
                                    <button className='btn btn-primary'>Add Guardian</button></Link>
                            
                        </div>
                    </div>
                    <div className='col-xl-12 reacttable'>
                    <DataTable
                        keys="id"
                        columns={columns}
                        initialData={this.state.parents}
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


export default AdminParent;