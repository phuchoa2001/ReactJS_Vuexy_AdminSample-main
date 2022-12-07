import randomId from 'random-id';

export const FakeDBContact = [
    {
        id: randomId(30, 'aA0'),
        name: "A test 2",
        avatar: "H",
        phone: "06427771803",
        rate: 5,
        enterprise: "Doanh nghiệp 1",
        position: "user",
        managementAccount: "user",
        dateCreated: new Date(),
        lastUpdate: new Date(),
        listOfCustomers: "Danh sách khách hàng 1"
    },
    {
        id: randomId(30, 'aA0'),
        name: "test 1",
        avatar: "H",
        phone: "09427771803",
        rate: 3,
        enterprise: "Doanh nghiệp 3",
        position: "user",
        managementAccount: "user",
        dateCreated: new Date(),
        lastUpdate: new Date(),
        listOfCustomers: "Danh sách khách hàng 3"
    },
    {
        id: randomId(30, 'aA0'),
        name: "A test 3",
        avatar: "H",
        phone: "08827771803",
        rate: 2,
        enterprise: "Doanh nghiệp 2",
        position: "user",
        managementAccount: "user",
        dateCreated: new Date(),
        lastUpdate: new Date(),
        listOfCustomers: "Danh sách khách hàng 2"
    },
    {
        id: randomId(30, 'aA0'),
        name: "test 4",
        avatar: "H",
        phone: "08425771803",
        rate: 4,
        enterprise: "Doanh nghiệp 5",
        position: "user",
        managementAccount: "user",
        dateCreated: new Date(),
        lastUpdate: new Date(),
        listOfCustomers: "Danh sách khách hàng 5"
    },
]

export const FakeDBEnterprise = [
    { title: "Doanh nghiệp 1", value: "Doanh nghiệp 1" },
    { title: "Doanh nghiệp 2", value: "Doanh nghiệp 2" },
    { title: "Doanh nghiệp 3", value: "Doanh nghiệp 3" },
    { title: "Doanh nghiệp 4", value: "Doanh nghiệp 4" },
    { title: "Doanh nghiệp 5", value: "Doanh nghiệp 5" },
    { title: "Doanh nghiệp 6", value: "Doanh nghiệp 6" },
]

export const FakeDBListOfCustomers = [
    { title: "Danh sách khách hàng 1", value: "Danh sách khách hàng 1" },
    { title: "Danh sách khách hàng 2", value: "Danh sách khách hàng 2" },
    { title: "Danh sách khách hàng 3", value: "Danh sách khách hàng 3" },
    { title: "Danh sách khách hàng 4", value: "Danh sách khách hàng 4" },
    { title: "Danh sách khách hàng 5", value: "Danh sách khách hàng 5" },
    { title: "Danh sách khách hàng 6", value: "Danh sách khách hàng 6" },
    { title: "Danh sách khách hàng 7", value: "Danh sách khách hàng 7" },
]