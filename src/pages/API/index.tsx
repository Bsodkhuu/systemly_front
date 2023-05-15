
export interface LoginLog{
    id: string;
    loginIp: string;
    loginDate: string;
    status: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: string;
    deleteDate: string;
    deleteUser: string;
    createdAt: string;
    updatedAt: string;
    userId?: string;
}

export interface User{
    id: string;
    email: string;
    password: string;
    companyName: string;
    firstName: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
}

export interface VehicleCategory{
    id: string;
    en: string;
    mn: string;
    createdAt: string;
    updatedAt: string;
}

export interface VehicleSubCategory{
    id: string;
    en: string;
    mn: string;
    vehicleCategoryId?: string;
    createdAt: string;
    updatedAt: string;
}
export interface ProductCategory{
    id: string;
    createdAt: string;
    updatedAt: string;
    en: string;
}

export interface ProductSubCategory{
    id: string;
    createdAt: string;
    updatedAt: string;
    en: string;
    productCategoryId?:string;
}
//order system 
export interface Constant{
    id: string;
    createdAt: string;
    updatedAt: string;
    constantName: string;
    parentId: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    deleteDate: string;
    deleteUser: number;
    updateUser: number;
}

export interface Prodmetric{
    id: string;
    createdAt: string;
    updatedAt: string;
    typeId: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    deleteDate: string;
    deleteUser: number;
    updateUser: number;
}

export interface VehicleUsage extends Product{
    id: string;
    createdAt: string;
    updatedAt: string;
    vehicleType: string;
}
export interface ProductFits extends Product{
    positionId: string;
    description: string;
    [productName: string]: any;
}
export interface Product extends Prodmetric{
    id: string;
    createdAt: string;
    updatedAt: string;
    manufacturerId: string;
    productName: string;
    productDescription: string;
    productCode: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
    confirmFlag: string;
    priceMain: number;
    currency: string;
    nameEng: string;//vehicle name english
    prodmetricId?: string;
    vehicleId?: string;
    productFitsId?: string;
    [typeId: string]:any;
}

export interface Branch{
    id: string;
    createdAt: string;
    updatedAt: string;
    branchName: string;
    parentId: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
}

export interface TrackInfo{
    packageId: string;
    spotId: string;
    descriptionSpot: string;
    trackDate: string;
    status: string; //zamin status 
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
}
export interface Order extends Product{
    id: string;
    createdAt: string;
    updatedAt: string;
    productId?: string;
    numbOfProd: string;
    prodmetricId?:string;
    prodAllTotal: number;
    manufacturerPrice: number;
    deliveryPrice: number;
    memberPrice: number;
    tax: number;
    otherPrice: number;
    totalPrice: number;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
    confirmFlag: string;
    orderedDate: string;
    historyId: string;
    status: string;
    packageId: number;
    receiveDate: string;
    receiverDate: string;
    branchId?: string;
    trackId?: string;
}

export interface StatusType{
    id: string;
    createdAt: string;
    updatedAt: string;
    statusName: string;
}

export interface Supplier{
    id: string;
    createdAt: string;
    updatedAt: string;
    supplierList: string;
}


export interface TeevriinZahialga{
    id: string;
    createdAt: string;
    updatedAt: string;
    statusName: string;
    date: string;
    teevriinZahialgaId: string;
    name: string;
}


export interface ServiceAppointment{
    id: string;
    createdAt: string;
    updatedAt: string;
    startTime: string;
    endTime: string;
    nemeltMedeelel: string;
    workId?: string;
    personId?:string;
    personVehicleId?: string;
    serviceId?: string;
    employeeId?: string;
    phoneId?: string;
}

export interface Work{
    id: string;
    createdAt: string;
    updatedAt: string;
    name: Week;
    open: string;
    close: string;
    description: string;
}
type Week = any;

export interface Holiday{
    id: string;
    createdAt: string;
    updatedAt: string;
    openDate: string;
    closeDate: string;
    description: string;
}

export interface Online{
    id: string;
    createdAt: string;
    updatedAt: string;
    image: string;
    link: string;
}

export interface BackOrder{
    id: string;
    createdAt: string;
    updatedAt: string;
    orderId?: string;
    supplierId?: string;
    description: string;
    quantity: string;
    netPrice: string;
    date: string;
    userId?: string;
    orderDate: string;
}

export interface Applications{
    id: string;
    createdAt: string;
    updatedAt: string;
    appName: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
    appUrl: string;
    category: number;
    displayOrder: string;
}

export interface Favorite{
    id: string;
    createdAt: string;
    updatedAt: string;
    applicationsId?:string;
    employeeId?:string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
}

export interface Permission{
    id: string;
    createdAt: string;
    updatedAt: string;
    permissionCode: string;
    permissionNote: string;
    permissionName: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
}

export interface Role{
    id: string;
    createdAt: string;
    updatedAt: string;
    roleName: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
    userId?: string;
}

export interface RoleApp{
    id: string;
    createdAt: string;
    updatedAt: string;
    roleId?:string;
    applicationsId?:string;
    permissionId?:string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
    type: string;
}

export interface EmployeeRole{
    id: string;
    createdAt: string;
    updatedAt: string;
    roleId?:string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
    employeeId: string;
    userId?:string;

}

export interface Notifications{
    id: string;
    createdAt: string;
    updatedAt: string;
    medeelel: string;
    postId: string;
}

export interface Description{
    id: string;
    createdAt: string;
    updatedAt: string;
    body: string;
}


export interface Service{
    id: string;
    createdAt: string;
    updatedAt: string;
    branchId?: string;
    serviceName: string;
    price: number;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
    employeeId: string;
}
export interface Vehicle extends PersonVehicle{
    id: string;
    createdAt: string;
    updatedAt: string;
    vehicleName: string;
    vehicleType: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
    vehicleMark: string;
    vehicleNameEng: string;   
}

export interface Address extends Person {
    id: string;
    createdAt: string;
    updatedAt: string;
    addressDistrict: string;
    addressSoum: string;
    address_bag: string;
    addressDetail: string;

    [lastName: string]: any;
    
}

export interface Person extends PersonPhone{
    id: string;
    createdAt: string;
    updatedAt: string;
    lastName: string;
    firstName: string;
    birthdate: string;
    registerId: string;
    gender: string;
    familyName: string;
    email: string;
    nationality: string;
    country: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
    historyId: string;
    confirmFlag: string;
    customerCode: string;
    phoneId?: string;
    addressId?: string;
    [phone: string]: any;
}
export interface PersonPhone{
    id: string;
    createdAt: string;
    updatedAt: string;
    phone: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
}

export interface PersonVehicle extends Person {
    id: string;
    createdAt: string;
    updatedAt: string;
    vehicleId?: string;
    vehicleNumber: string;
    personId?: string;
    vehicleColor: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
    [lastName: string]: any;
}

export interface ServiceOrder extends Service{
    id: string;
    createdAt: string;
    updatedAt: string;
    branchId?: string;
    payPrice: string;
    serviceId?: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
    paidAmount: number;
    personId?:  string;
    personVehicleId?: string;
    status: string;
    [serviceName: string]: any;
}

export interface Employee extends Person {
    id: string;
    createdAt: string;
    updatedAt: string;
    personId?: string;
    branchId?: string;
    positionId: string;
    fileName: string;
    fileSize: string;
    filePath: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
}

export interface ServiceEmployee extends ServiceOrder{
    id: string;
    createdAt: string;
    updatedAt: string;
    employeeId: string;
    branchId?:  string;
    serviceOrderId?: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
    
}

export interface ServiceOrderProduct extends ServiceOrder{
    id: string;
    createdAt: string;
    updatedAt: string;
    productCnt: number //too shirheg
    serviceOrderId?: string;
    branchId?: string;
    productId?:string;
    prodmetricId?:string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
}
export interface GarageInventory extends Branch{
    id: string;
    createdAt: string;
    updatedAt: string;
    branchId?:string;
    productId?:string;
    mainPrice: string;
    productPirce: number;
    productCnt: number;
    orderId?:string;
    prodmetricId?:string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
    [branch: string]: any;
}