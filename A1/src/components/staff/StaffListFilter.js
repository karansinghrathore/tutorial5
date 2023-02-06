import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react'
import { Row, Col, Form, InputGroup} from 'react-bootstrap';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

function StaffListFilter({onFilterChange}) {

    const [staffType, setStaffType] = useState("All");
    const [keyword, setKeyword] = useState("");

    const setStaffTypeFilter = (val) =>{
        setFilter(keyword,val);
        setStaffType(val);
    }

    const setKeywordFilter = (val) =>{
        setFilter(val,staffType);
        setKeyword(val);
    }

    const setFilter = (word, type) => {
       onFilterChange({keyword: word, staffType : type});
    }

    return (
        <div>
            <Row>
                <Col xs={4}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></InputGroup.Text>
                        <Form.Control placeholder="Enter name of staff member" onChange={(e) => setKeywordFilter(e.target.value)}/>
                    </InputGroup>
                </Col>
                <Col xs={4}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Staff Type</InputGroup.Text>
                        <Form.Select onChange={(e) => setStaffTypeFilter(e.target.value)}>
                            <option>All</option>
                            <option value="Chef">Chef</option>
                            <option value="Waiter">Waiter</option>
                            <option value="Manager">Manager</option>
                        </Form.Select>
                    </InputGroup>
                </Col>
            </Row>
               
        </div>
    );
}

export default StaffListFilter;