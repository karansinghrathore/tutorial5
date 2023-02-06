import React, {useState, useEffect} from 'react'
import { Row, Col, Alert, Button} from 'react-bootstrap';
import OwnerNavBar from '../navbar/OwnerNavBar';
import StaffActionBar from './StaffActionBar';
import StaffAdd from './StaffAdd';
import StaffListFilter from './StaffListFilter';
import StaffMemberList from './StaffMembersList';

export function StaffHomePage() {

    let activeTab = "staff";
    const [staffType, setStaffType] = useState("All");
    const [keyword, setKeyword] = useState("");
    const [selectedMember, setSelectedMember] = useState();
    const[staffMemberList,setStaffMembersList] = useState([]);
    const[dummyStaffMemberList,setDummyStaffMemberList] = useState([]);
    const[showAddStaffScreen, setShowAddStaffScreen] = useState(false);
    const[showAddSuccess, setShowAddSuccess] = useState(false);

    useEffect(() => {
        fillDummyStaffMembersList();       
    }, []);

    const fillDummyStaffMembersList= ()=>{
        let arr=[];
        for (let i = 0; i < 10; i++) {
            let id = i;
            let name = "Staff "+i.toString();
            let type = "Chef";
            let isPresent = true;
            if(i%2 === 0)
                 type = "Waiter";
            if(i%4 === 0)
                isPresent = false;
            let contact = "900900"+i.toString()+"000";    
            arr.push({id:id, name:name,type:type, isPresent:isPresent, contact})
        }
        setDummyStaffMemberList(arr);
        setStaffMembersList(arr);
    }

    const handleFilter = (filter) =>{
        let arr= dummyStaffMemberList;
        if(filter.keyword && filter.keyword.trim().length > 0)
            arr = dummyStaffMemberList.filter(member => member.name.toLowerCase().includes(filter.keyword.toLowerCase()))
        if(filter.staffType && filter.staffType !== 'All')
            arr =dummyStaffMemberList.filter(member =>  member.type.toLowerCase().includes(filter.staffType.toLowerCase()))
        setStaffMembersList(arr);
        setStaffType(filter.staffType);
        setKeyword(filter.keyword);
    }

    const handleStaffSelection = (member) =>{
        setSelectedMember(member);
    }

    const handleAction = (actionId) =>{
        switch(actionId) {
            case 'addStaff':
                setShowAddStaffScreen(true);
                break;
            case 'updateStaff':
                alert("update staff will be called");
                break;
            case 'deleteStaff':
                deleteStaffMember();
                break;
            case 'presentStaff':
                markPresent();
                break;
            case 'absentStaff':
               markAbsent();
                break;
            case 'refreshStaff':
               handleFilter();
                break;
            default:   
                return null
          }
    }

    const markPresent =() =>{
        const members = dummyStaffMemberList.map(member => {
            return member === selectedMember ? {...member, isPresent: true} : member;
        });
        setDummyStaffMemberList(members);
        const sm = selectedMember;
        selectedMember.isPresent = true;
        setSelectedMember(sm);
        handleFilter({keyword:keyword, staffType:staffType});
    }

    const markAbsent = () =>{
        const members = dummyStaffMemberList.map(member => {
            return member === selectedMember ? {...member, isPresent: false} : member;
        });
        setDummyStaffMemberList(members);
        const sm = selectedMember;
        selectedMember.isPresent = false;
        setSelectedMember(sm);
        handleFilter({keyword:keyword, staffType:staffType});
    }

    const deleteStaffMember = () =>{
        alert("delete will be handled");
    }

    const addStaff = (staff) =>{
        setStaffMembersList([staff, ...staffMemberList]);
        setShowAddStaffScreen(false);
        setShowAddSuccess(true);
    }

    return(
        <div>
            <OwnerNavBar activeTab={activeTab}/>
            <Row>
                <Col><StaffActionBar selectedMember={selectedMember} onAction={handleAction}/></Col>    
            </Row>
            <Row >
                <StaffListFilter onFilterChange={handleFilter} />
            </Row>
            <Alert show={showAddSuccess} variant="success">
                <Alert.Heading>Staff member added</Alert.Heading>
                <p>
                   Staff member is added succesfully. It will  be reflected into the list !! See first entry !! 
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                <Button onClick={() => setShowAddSuccess(false)} variant="outline-success">
                    Close
                </Button>
                </div>
            </Alert>
            <Row>
                <StaffMemberList staffMemberList={staffMemberList} onStaffSelected={handleStaffSelection}/>
            </Row>
            
            <StaffAdd show={showAddStaffScreen} onSave={addStaff} onCancel={() => setShowAddStaffScreen(false)}></StaffAdd>
            
        </div>
    )
}

export default StaffHomePage;