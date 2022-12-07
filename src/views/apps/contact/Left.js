// ** React Imports
import React from 'react';

// ** Email App Component Imports
import PickerDefault from './view/PickerDefault';
import RatingBasic from './view/RatingBasic';

// ** Third Party Components
import { FormGroup, Form, Label, Input } from 'reactstrap/lib';
import { Filter } from 'react-feather';

// ** Store & Actions
import { setValueFilter } from './store/actions';
import { useDispatch, useSelector } from 'react-redux';

// ** Hook 
import { useRTL } from '@hooks/useRTL'

// ** Fake DB
import { FakeDBEnterprise, FakeDBListOfCustomers } from './@fake-db';

function Left(props) {
    // ** Hooks
    const [isRtl,] = useRTL()

    const dispatch = useDispatch();
    const filter = useSelector(state => state.contact.filter);

    // ** Destructuring Object Filter
    const {
        name, enterprise, position,
        rate, managementAccount, dateCreated,
        lastUpdate, listOfCustomers
    } = filter;


    // ** Handles Change Input
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        dispatch(setValueFilter({ value, name }))
    }

    // ** Handles Change Other
    const handleChangeOther = (name, value) =>
        dispatch(setValueFilter({ value, name }))

    return (
        <div>
            <h5 className='contact-left-title'>
                <div className='contact-left-icon'>
                    <Filter size={20} />
                </div>
                Bộ Lọc tìm kiếm
            </h5>
            <div className='contact-left-form'>
                <Form >
                    <FormGroup >
                        <Label for="Name">
                            Tên
                        </Label>
                        <Input
                            id="Name"
                            name="name"
                            placeholder="Tìm theo tên"
                            type="text"
                            value={name}
                            onChange={handleChangeInput}
                        />
                    </FormGroup>
                    <FormGroup >
                        <Label for="Enterprise">
                            Doanh nghiệp
                        </Label>
                        <Input
                            id="Enterprise"
                            name="enterprise"
                            type="select"
                            placeholder="Chọn doanh nghiệp"
                            value={enterprise}
                            onChange={handleChangeInput}
                        >
                            <option value={""}>
                                Tất cả
                            </option>
                            {FakeDBEnterprise.map((item, index) => (
                                <option value={item.value} key={index}>
                                    {item.title}
                                </option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup >
                        <Label for="examplePosition">
                            Chức vụ
                        </Label>
                        <Input
                            id="Position"
                            name="position"
                            placeholder="Vd : sale ,dev ,csdk..."
                            type="text"
                            value={position}
                            onChange={handleChangeInput}
                        />
                    </FormGroup>
                    <FormGroup >
                        <Label for="managementAccount">
                            Xếp hàng
                        </Label>
                        <RatingBasic
                            dir={isRtl ? 'rtl' : 'ltr'}
                            filledColor={"rgb(255, 159, 67)"}
                            initialRating={rate}
                            onChange={value => handleChangeOther("rate", value)}
                        />
                    </FormGroup>
                    <FormGroup >
                        <Label for="managementAccount">
                            Tài khoản quản lí
                        </Label>
                        <Input
                            id="managementAccount"
                            name="managementAccount"
                            placeholder="Tìm theo tên"
                            type="text"
                            value={managementAccount}
                            onChange={handleChangeInput}
                        />
                    </FormGroup>
                    <FormGroup >
                        <Label for="dateCreated">
                            Ngày tạo
                        </Label>
                        <PickerDefault
                            value={dateCreated}
                            placeholder="Chọn lịch ngày tạo"
                            onChange={date => handleChangeOther("dateCreated", date[0])}
                        />
                    </FormGroup>
                    <FormGroup >
                        <Label for="lastUpdate">
                            Cập nhật lần cuối
                        </Label>
                        <PickerDefault
                            value={lastUpdate}
                            placeholder="Chọn lịch lần cuối"
                            onChange={date => handleChangeOther("lastUpdate", date[0])}
                        />
                    </FormGroup>
                    <FormGroup >
                        <Label for="listOfCustomers">
                            Danh sách khách hàng
                        </Label>
                        <Input
                            id="listOfCustomers"
                            name="listOfCustomers"
                            type="select"
                            value={listOfCustomers}
                            onChange={handleChangeInput}
                        >
                            <option value={""}>
                                Tất cả
                            </option>
                            {FakeDBListOfCustomers.map((item, index) => (
                                <option value={item.value} key={index}>
                                    {item.title}
                                </option>
                            ))}
                        </Input>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
}

export default Left;