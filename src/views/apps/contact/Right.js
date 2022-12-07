// ** React Imports
import React, { useState } from 'react';

// ** Third Party Components
import { Button } from 'reactstrap';
import DataTable from 'react-data-table-component';

// ** Store & Actions
import { useSelector } from 'react-redux';

// ** Get Column
import useColumn from './useColumn';

// ** Common
import filterArray from './common/filterArray';

function Right(props) {

    // ** States
    const [selectedRows, setSelectedRows] = useState([]);

    // ** Hooks
    const { contacts, filter } = useSelector(state => state.contact);

    // ** Function Filter Contacts
    const filterContact = filterArray(filter, contacts);

    // ** Get Column
    const column = useColumn();

    // ** Handles ADD Contact
    const handleAddClick = () => alert("Bạn đã bấm vào thêm sản phẩm")

    // ** Handles EDIT Contact
    const handleEditClick = () => alert("Bạn đã bấm vào sửa sản phẩm")

    // ** Handles Select Contact
    const handleChangeTable = ({ selectedRows }) => setSelectedRows(selectedRows);
    return (
        <div>
            <h3 className='contact-right-title'>Danh sách liên hệ <span>Tổng ({filterContact.length})</span></h3>
            <div className='contact-right-action'>
                <Button.Ripple color='primary' onClick={handleAddClick}>
                    Thêm liên hệ
                </Button.Ripple>
                <Button.Ripple color='primary' onClick={handleEditClick} disabled={selectedRows.length !== 1}>
                    Sửa liên hệ
                </Button.Ripple>
            </div>
            <div className='contact-right-table'>
                <DataTable
                    columns={column}
                    data={filterContact}
                    selectableRows
                    onSelectedRowsChange={handleChangeTable}
                    pagination
                />
            </div>
        </div>
    );
}

export default Right;