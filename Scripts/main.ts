import { DanhSachNhanVien } from './DanhSachNhanVien';
import { NhanVien } from "./NhanVien";
let dsnv = new DanhSachNhanVien();

function ThemNhanVien(){
  let maNV:string = (<HTMLInputElement>document.getElementById('maNhanVien')).value;
  let tenNV:string = (<HTMLInputElement>document.getElementById('hoTen')).value;
  let luongCB:number = parseInt((<HTMLInputElement>document.getElementById('luongCB')).value);
  let loaiNV:number = 1;
  let loaiNVRad:any = document.getElementsByClassName('loaiNhanVien');
  // for(let i = 0; i< loaiNVRad.length; i++){
  //   if(loaiNVRad[i].checked){
  //     loaiNV = loaiNVRad[i].value;
  //   }
  // }
  for(let rdCheck of loaiNVRad){
    if(rdCheck.checked){
      loaiNV = rdCheck.value;
    }
  }
  let nhanVien = new NhanVien(maNV, tenNV, luongCB, loaiNV);
  dsnv.ThemNhanVien(nhanVien);
  CapNhatDanhSachNhanVien();
  
}
let btnThemNV = <HTMLButtonElement>document.getElementById('btnThemNhanVien');
btnThemNV.addEventListener('click', ThemNhanVien);

function CapNhatDanhSachNhanVien(){
  let tbDanhSachNhanVien = document.getElementById('danhSachNhanVienContent');
  tbDanhSachNhanVien.innerHTML = '';
  for(let nhanvien of dsnv.MangNhanVien){
    let tdMaNV:any = TaoTD('maNV', nhanvien.MaNhanVien);
    let tdTenNV:any = TaoTD('maNV', nhanvien.HoTen);
    let tdluongCBNV:any = TaoTD('maNV', nhanvien.LuongCB);
    let tdloaiNV:any = TaoTD('maNV', nhanvien.layLoaiTenNhanVien());
    let tinhTongLuong:any = TaoTD('maNV', nhanvien.TinhLuong());
    let trNhanVien = document.createElement('tr');
    trNhanVien.appendChild(tdMaNV);
    trNhanVien.appendChild(tdTenNV);
    trNhanVien.appendChild(tdluongCBNV);
    trNhanVien.appendChild(tdloaiNV);
    trNhanVien.appendChild(tinhTongLuong);
    tbDanhSachNhanVien.appendChild(trNhanVien);
  }
}
function TaoTD(classname, value){
  let td = document.createElement('td');
  td.className = classname;
  td.innerHTML = value;
  return td;
}
