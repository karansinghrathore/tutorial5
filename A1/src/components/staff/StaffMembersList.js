import React from 'react'
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheck, faRemove } from '@fortawesome/free-solid-svg-icons';
import BootstrapTable from 'react-bootstrap-table-next';


function StaffMemberList({staffMemberList, onStaffSelected}) {

    const attendanceFormatter = (cell, row) =>{
        return(
            <FontAwesomeIcon icon={row.isPresent ? faCheck : faRemove}/>
        )
    }

    const nameFormatter = (cell, row) =>{
        return(
            <Nav.Link style={{color: 'blue'}}>{row.name}</Nav.Link>
        )
    }

    const columns = [{
        dataField: 'name',
        text: 'Name',
        formatter: nameFormatter,
        }, {
        dataField: 'type',
        text: 'Type'
        }, {
        dataField: 'isPresent',
        text: 'Attendance',
        formatter: attendanceFormatter,
        },{
            dataField:'contact',
            text:'contact'
    }];

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        style: { background: '#b7d7e8' },
        onSelect: (row, isSelect, rowIndex, e) => {
            onStaffSelected(row);
        }
    };

    return (
    <div>
        <BootstrapTable keyField='id' data={ staffMemberList } columns={ columns} selectRow={selectRow} />
    </div>
    )
        
}

export default StaffMemberList;