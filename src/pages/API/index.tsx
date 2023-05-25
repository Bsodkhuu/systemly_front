export interface LoginLog {
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

export interface User {
  id: string;
  email: string;
  password: string;
  companyName: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}

export interface VehicleCategory {
  id: string;
  en: string;
  mn: string;
  createdAt: string;
  updatedAt: string;
}

export interface VehicleSubCategory {
  id: string;
  en: string;
  mn: string;
  vehicleCategoryId?: string;
  vehicleCategory: VehicleCategory;
  createdAt: string;
  updatedAt: string;
}
export interface ProductCategory {
  id: string;
  createdAt: string;
  updatedAt: string;
  en: string;
}

export interface ProductSubCategory {
  id: string;
  createdAt: string;
  updatedAt: string;
  en: string;
  productCategoryId?: string;
  productCategory: ProductCategory;
}
//order system
export interface Constant {
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

export interface Prodmetric {
  id: string;
  createdAt: string;
  updatedAt: string;
  typeId: string;
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
  insertUser: string;
  deleteDate: string;
  deleteUser: string;
  updateUser: string;
}

export interface VehicleUsage {
  id: string;
  createdAt: string;
  updatedAt: string;
  vehicleType: string;
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
  insertUser: string;
  updateUser: string;
  deleteDate: string;
  deleteUser: string;
}
export interface ProductFits {
  id: string;
  createdAt: string;
  updatedAt: string;
  positionId: string;
  description: string;
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
  insertUser: string;
  updateUser: string;
  deleteDate: string;
  deleteUser: string;
  
}
export interface Product{
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
  insertUser: string;
  updateUser: string;
  deleteDate: string;
  deleteUser: string;
  confirmFlag: string;
  quantity: number;
  historyId: string;
  priceMain: number;
  evaDate: string;
  productCnt: number;
  currency: string;
  prodmetricType: number;
  prodmetric: Prodmetric; 
  prodmetricId?: string;
  vehicle: VehicleUsage;
  vehicleId?: string;
  productFits: ProductFits;
  productFitsId?: string;
  branch: Branch;
  branchId?: string;
}

export interface Branch {
  id: string;
  createdAt: string;
  updatedAt: string;
  branchName: string;
  parentId: string;
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
  insertUser: string;
  updateUser: string;
  deleteDate: string;
  deleteUser: string;
}

export interface TrackInfo {
  packageId: string;//maufacturer name 
  spotId: string; //location 
  descriptionSpot: string; //loaction tailbar 
  trackDate: string; // on sar 
  status: string; //zamin status
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
  insertUser: string;
  updateUser: string;
  deleteDate: string;
  deleteUser: string;
}

//Order table chin suld zahialgin huudasand ashiglaj bgaa shvv 
export interface Order {
  id: string;
  createdAt: string;
  updatedAt: string;
  product: Product;
  productId?: string;
  prodmetric: Prodmetric;
  prodmetricId?: string;
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
  insertUser: string;
  updateUser: string;
  deleteDate: string;
  deleteUser: string;
  confirmFlag: string;
  orderedDate: string;
  historyId: string;
  status: string;
  packageId: number;
  receiveDate: string;
  receiverDate: string;
  branch: Branch;
  branchId?: string;
}

export interface ServiceAppointment {
  id: string;
  createdAt: string;
  updatedAt: string;
  startTime: string;
  endTime: string;
  nemeltMedeelel: string;
  Work: Work;
  workId?: string;
  person: Person;
  personId?: string;
  personVehicle: PersonVehicle;
  personVehicleId?: string;
  service: Service;
  serviceId?: string;
  employee: Employee;
  employeeId?: string;
  phone: PersonPhone;
  phoneId?:string;
}

export interface Work {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: Week;
  open: string;
  close: string;
  description: string;
}
type Week = any;

export interface Holiday {
  id: string;
  createdAt: string;
  updatedAt: string;
  openDate: string;
  closeDate: string;
  description: string;
}

export interface Online {
  id: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  link: string;
}



export interface Applications {
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

export interface Favorite {
  id: string;
  createdAt: string;
  updatedAt: string;
  applicationsId?: string;
  employeeId?: string;
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
}

export interface Permission {
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

export interface Role {
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

export interface RoleApp {
  id: string;
  createdAt: string;
  updatedAt: string;
  roleId?: string;
  applicationsId?: string;
  permissionId?: string;
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
  insertUser: number;
  updateUser: number;
  deleteDate: string;
  deleteUser: number;
  type: string;
}

export interface EmployeeRole {
  id: string;
  createdAt: string;
  updatedAt: string;
  roleId?: string;
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
  insertUser: number;
  updateUser: number;
  deleteDate: string;
  deleteUser: number;
  employeeId: string;
  userId?: string;
}

export interface Notifications {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string; //tsesni ner
  description: string; // tses duudah url
  showType: string; //medegdeliin haragdah heseg -systemiin tolgoi hesegt doot buland hajuud zereg haruulah gazriin turlvvd
  rank: string; //medegdliin zereglel - yaraltai hewiin yaraltai bish zereg bj bolno
  toType: string; //ajiltan_salabrin_bvh_ajiltand
  toEmpId: string; //medegdel hvleej awah ajiltan eswel salbar
  status: string //vvsgesn, harsan 
  type: string; //zahialga, zamiin medee, zar zereg bvh turliin notification bj bolno
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
  insertUser: string;
  updateUser: string;
  deleteDate: string;
  deleteUser: string;
}

export interface Description {
  id: string;
  createdAt: string;
  updatedAt: string;
  body: string;
}

export interface Service {
  id: string;
  createdAt:string;
  updatedAt:string;
  branch: Branch;
  branchId?:string;
  serviceName:string;
  price: number;
  activeFlag:string;
  deleteFlag:string;
  insertDate:string;
  insertUser:string;
  updateUser:string;
  deleteDate:string;
  deleteUser:string;
}
export interface Vehicle{
  id: string;
  createdAt: string;
  updatedAt: string;
  vehicleName: string;
  vehicleType: string;
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
  insertUser: string;
  updateUser: string;
  deleteDate: string;
  deleteUser: string;
  vehicleMark: string;
  vehicleNameEng: string;
}

export interface Address {
  id: string;
  createdAt: string;
  updatedAt: string;
  addressDistrict: string;
  addressSoum: string;
  address_bag: string;
  addressDetail: string;
  employeeId?:string;
  employee: Employee;
  branch: Branch;
  branchId?: string;
  phoneNumber: PersonPhone;
  phoneId?:string;
}

export interface Person {
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
  country: string;
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
  insertUser: string;
  updateUser: string;
  deleteDate: string;
  deleteUser: string;
  historyId: string;
  confirmFlag: string;
  customerCode: string;
  phoneId?: string;
  personPhone: PersonPhone;
}
export interface PersonPhone {
  id: string;
  createdAt: string;
  updatedAt: string;
  phone: string;
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
  insertUser: string;
  updateUser: string;
  deleteDate: string;
  deleteUser: string;
}

export interface PersonVehicle {
  id: string;
  createdAt: string;
  updatedAt: string;
  vehicleNumber: string;
  vehicleColor: string;
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
  insertUser: string;
  updateUser: string;
  deleteDate: string;
  deleteUser: string;
}

export interface ServiceOrder {
  id: string;
  createdAt: string;
  updatedAt: string;
  branch: Branch;
  branchId?: string;
  payPrice: number;
  service: Service;
  serviceId?: string;
  paidAmount: number;
  zaswarNumber: string;
  serviceDate: string;
  person: Person;
  personId?: String
  personVehicle: PersonVehicle;
  personVehicleId?: string;
  vehicle: Vehicle;
  vehicleId?:string;
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
  insertUser: string;
  updateUser: string;
  deleteDate: string;
  deleteUser: string; 
}

export interface Position{
id: string;
createdAt: string;
updatedAt: string;
positionName: string;
activeFlag: string;
deleteFlag: string;
insertDate: string;
insertUser: string;
updateUser: string;
deleteDate: string;
deleteUser: string;
}
export interface Employee{
  id: string;
  createdAt: string;
  updatedAt: string;
  lastName: string;
  firstName: string;
  email: string;
  registerId: string;
  branch:Branch;
  branchId?:string;
  personPhone: PersonPhone;
  phoneId?: string;
  positionId?: string;
  filePath: string;
  jobStart: string;
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
  insertUser: string;
  updateUser: string;
  deleteDate: string;
  deleteUser: string;
  position: Position;
}

export interface ServiceEmployee {
  id: string;
  createdAt: string;
  updatedAt: string;
  employeeId: string;
  serviceOrder: ServiceOrder;
  serviceOrderId?: string;
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
  insertUser: string;
  updateUser: string;
  deleteDate: string;
  deleteUser: string;
}

export interface ServiceOrderProduct{
  id: string;
  createdAt: string;
  updatedAt: string;
  productCnt: number;  //too shirheg
  serviceOrder: ServiceOrder;
  serviceOrderId?: string;
  branch: Branch;
  branchId?: string;
  product: Product;
  productId: string;
  prodmetric: Prodmetric;
  prodmetricId: string;
  service: Service;
  serviceId?: string;
  serviceEmployee: ServiceEmployee;
  serviceEmployeeId?: string;
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
  insertUser: string;
  updateUser: string;
  deleteDate: string;
  deleteUser: string;
}
export interface GarageInventory {
  id: string;
  createdAt: string;
  updatedAt: string;
  branchId?: string;
  productId?: string;
  mainPrice: string;
  productPirce: number;
  productCnt: number;
  orderId?: string;
  prodmetricId?: string;
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
  insertUser: string;
  updateUser: string;
  deleteDate: string;
  deleteUser: string;
  branch: Branch;
  product: Product;
  prodmetric: Prodmetric;
  order: Order;
}

export interface Inquiry{
  id: string;
  createdAt: string;
  updatedAt: string;
  product: Product;
  productId?: string
  prodmetric: Prodmetric;
  prodmetricId?: string
  branch: Branch;
  branchId?: string;
  vehicleUsage: VehicleUsage;
  vehicleUsageId?: string
  inquiryNumber: string;
  inquiryDate: string;
  activeFlag: string;
  deleteFlag: string;
  insertDate: string;
  insertUser: string;
  updateUser: string;
  deleteDate: string;
  deleteUser: string;
}