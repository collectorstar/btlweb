var header = document.querySelector("#header");
header.innerHTML = `
<div class="mid-header">
          <a href="./index.html" class="brand">
            <img src="./img/header/logo.png" alt="" class="float-left" />
            <div class="logo-text">
              <h3>TRƯỜNG ĐẠI HỌC XÂY DỰNG HÀ NỘI</h3>
              <h4>TRANG THÔNG TIN TUYỂN SINH</h4>
            </div>
          </a>
          <ul class="float-right right-menu">
            <li class="float-left">
              <a class="right-menu-box" href="">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>Tìm kiêm</p>
              </a>
            </li>
            <li class="float-left">
              <a class="right-menu-box" href="">
                <i class="fa-solid fa-building-columns"></i>
                <p>HUCE</p>
              </a>
            </li>
            <li class="float-left trans-red">
              <a class="right-menu-box" href="">
                <i class="fa-sharp fa-solid fa-user"></i>
                <p>Đăng Nhập</p>
              </a>
            </li>
          </ul>
          <div class="clear"></div>
        </div>
`;

var footer = document.querySelector("#footer");
footer.innerHTML = `
<div class="container-footer">
          <div class="info-footer">
            <a href="" class="brand-footer">
              <img src="./img/footer/1.png" alt="" class="logo-footer" />
              <div class="text-brand-footer">
                <h3>TRƯỜNG ĐẠI HỌC XÂY DỰNG HÀ NỘI</h3>
                <h4>TRANG THÔNG TIN TUYỂN SINH</h4>
              </div>
            </a>
            <div class="list-info-footer">
              <ul class="list-info">
                <li class="address mgb department">
                  Phòng Truyền thông - Tuyển sinh
                </li>
                <li class="address">Trưởng phòng:</li>
                <li>
                  <i class="fa-sharp fa-solid fa-location-dot mgr"></i>
                  Phòng 104, Tòa nhà H1, Trường Đại học Xây dựng Hà Nội
                </li>
                <li class="mgb">
                  <i class="fa-sharp fa-solid fa-phone mgr"></i>
                  Điện thoại: (024) 22404010; 0913211357
                </li>
                <li class="address">Tuyển sinh Đại học:</li>
                <li>
                  <i class="fa-sharp fa-solid fa-location-dot mgr"></i>
                  Phòng 304, Tòa nhà A1, Trường Đại học Xây dựng Hà Nội
                </li>
                <li>
                  <i class="fa-sharp fa-solid fa-phone mgr"></i>
                  Điện thoại: (024) 38 694711; Hotline: 086 9071382
                </li>
                <li class="mgb">
                  <i class="fa-solid fa-envelope mgr"></i>
                  Email: tuyensinhdh@huce.edu.vn
                </li>
                <li class="address">Tuyển sinh Sau Đại học:</li>
                <li>
                  <i class="fa-sharp fa-solid fa-location-dot mgr"></i>
                  Phòng 102, Tòa nhà H1, Trường Đại học Xây dựng Hà Nội
                </li>
                <li>
                  <i class="fa-sharp fa-solid fa-phone mgr"></i>
                  Điện thoại: (024) 36288618; Hotline: 088 8885501
                </li>
                <li class="mgb">
                  <i class="fa-solid fa-envelope mgr"></i>
                  Email: tuyensinhsdh@huce.edu.vn
                </li>
              </ul>
            </div>
          </div>
          <div class="conect-society-footer">
            <div class="society-link-footer">
              <p class="address">MẠNG XÃ HỘI</p>
              <ul>
                <li class="float-left">
                  <a href="https://www.facebook.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="32px"
                      height="32px"
                    >
                      <path
                        fill="#3F51B5"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                      ></path>
                    </svg>
                  </a>
                </li>

                <li class="float-left">
                  <a href="https://twitter.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="32px"
                      height="32px"
                    >
                      <path
                        fill="#03A9F4"
                        d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                      ></path>
                    </svg>
                  </a>
                </li>

                <li class="float-left">
                  <a href="https://www.youtube.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="32px"
                      height="32px"
                    >
                      <path
                        fill="#FF3D00"
                        d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                      ></path>
                      <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
              <div class="clear"></div>
            </div>
            <div class="map-footer">
              <p class="address">
                BẢN ĐỒ CHỈ DẪN TRƯỜNG ĐẠI HỌC XÂY DỰNG HÀ NỘI
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.733469490731!2d105.84113201538923!3d21.00331849402121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac773026b415%3A0x499b8b613889f78a!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBYw6J5IEThu7FuZyBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1636299584206!5m2!1svi!2s"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
`;

var aboutMe = document.querySelector("#about-me");
aboutMe.innerHTML = `
<div class="content-about-me">
          <p>
            ©2021, HANOI UNIVERSITY OF CIVIL ENGINEERING. All rights reserved
          </p>
        </div>
`;

var nav = document.querySelector("#nav");
nav.innerHTML = `
<div class="nav-mid">
      <ul class="list-nav">
        <li>
          <a href="./index.html">
            <div class="item-list-nav">
              <i class="fa-solid fa-house-chimney"></i>
            </div>
          </a>
        </li>

        <li>
          <a href="">
            <div class="item-list-nav">
              <p>GIỚI THIỆU</p>

              <ul class="list-submenu2">
                <li>
                  <a href="">Lời chào mừng của Hiệu trưởng</a>
                </li>
                <li>
                  <a href="">Lịch sử phát triển</a>
                </li>
              </ul>
            </div>
          </a>
        </li>

        <li>
          <a href="">
            <div class="item-list-nav">
              <p>TẠI SAO CHỌN HUCE?</p>

              <ul class="list-submenu2">
                <li>
                  <a href="">Bề dày lịch sử</a>
                </li>
                <li>
                  <a href="">Đội ngũ giảng viên</a>
                </li>
                <li>
                  <a href="">Học bổng du học</a>
                </li>
                <li>
                  <a href="">Cơ sở vật chất</a>
                </li>
                <li>
                  <a href="">Cơ hội nghề nghiệp</a>
                </li>
                <li>
                  <a href="">Môi trường học tập</a>
                </li>
              </ul>
            </div>
          </a>
        </li>

        <li>
          <a href="">
            <div class="item-list-nav">
              <p>TUYỂN SINH ĐẠI HỌC</p>

              <ul class="list-submenu2">
                <li>
                  <a href="">Đại học chính quy</a>
                </li>
                <li>
                  <a href="">Đại học liên thông chính quy</a>
                </li>
                <li>
                  <a href="">Đại học bằng hai chính quy</a>
                </li>
                <li>
                  <a href="">Đại học vừa học vừa làm</a>
                </li>
                <li>
                  <a href="">Học phí - Học bổng</a>
                </li>
                <li>
                  <a href="">Liên hệ</a>
                </li>
              </ul>
            </div>
          </a>
        </li>

        <li>
          <a href="">
            <div class="item-list-nav">
              <p>TUYỂN SINH SAU ĐẠI HỌC</p>

              <ul class="list-submenu2">
                <li>
                  <a href="">Tuyển sinh Thạc sĩ</a>
                </li>
                <li>
                  <a href="">Tuyển sinh Tiến sĩ</a>
                </li>
              </ul>
            </div>
          </a>
        </li>

        <li>
          <a href="">
            <div class="item-list-nav">
              <p>ĐÀO TẠO QUỐC TẾ</p>

              <ul class="list-submenu2">
                <li>
                  <a href="">Chương trình đại học và dự bị đại học</a>
                </li>
                <li>
                  <a href="">Chương trình liên kết đào tạo thạc sĩ</a>
                </li>
              </ul>
            </div>
          </a>
        </li>

        <li class="support-nav">
          <a href="">
            <div class="item-list-nav">
              <p>HỖ TRỢ</p>

              <ul class="list-submenu2">
                <li>
                  <a href="">Phòng Truyền thông - Tuyển sinh</a>
                </li>
                <li>
                  <a href="">Khoa/Ban</a>
                </li>
                <li>
                  <a href="">Hỏi đáp</a>
                </li>
              </ul>
            </div>
          </a>
        </li>

      </ul>
    </div>
`;

var category = document.querySelector("#category");
category.innerHTML = `
<div class="container-category">
          <h2>tin tức đại học</h2>
        </div>
`;
