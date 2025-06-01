const 게시글등록페이지 = () => {
  return (
    <div class="layout">
      <div class="enroll-subject">
        <div class="enroll-subject-text">게시물 등록</div>
      </div>
      <div class="enroll-row-container">
        <div class="enroll-row-section">
          <div class="enroll-row-flex">
            <div class="flex-half">
              <div class="enroll-form-title">
                <div>작성자 </div>
                <div class="enroll-required-indicator"> *</div>
              </div>
              <input
                type="text"
                placeholder="작성자 명을 입력해 주세요."
                class="enroll-input"
              />
            </div>
            <div class="flex-half">
              <div class="enroll-form-title">
                <div>비밀번호</div>
                <div class="enroll-required-indicator"> *</div>
              </div>
              <input
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                class="enroll-input"
              />
            </div>
          </div>
        </div>

        <div class="enroll-border"></div>

        <div class="enroll-row-section">
          <div class="enroll-form-title">
            <div>제목</div>

            <div class="enroll-required-indicator"> *</div>
          </div>
          <input
            type="text"
            class="enroll-input"
            placeholder="제목을 입력해 주세요."
          />
        </div>
        <div class="enroll-border"></div>
        <div class="enroll-row-section">
          <div class="enroll-form-title">
            <div>내용</div>
            <div class="enroll-required-indicator"> *</div>
          </div>
          <textarea
            placeholder="내용을 입력해 주세요."
            class="enroll-input enroll-textarea"
          ></textarea>
        </div>
        <div class="enroll-row-section">
          <div class="enroll-form-title">
            <div>주소</div>
          </div>
          <div class="enroll-address-firstrow">
            <input text="number" class="zipcode-input" placeholder="12345" />
            <button class="zipcode-search-button">우편번호 검색</button>
          </div>

          <input
            placeholder="주소를 입력해주세요."
            class="enroll-input"
            type="text"
          />
          <input placeholder="상세주소" class="enroll-input" type="text" />
        </div>
        {/* border */}
        <div class="enroll-border"></div>
        <div class="enroll-row-section">
          <div class="enroll-form-title">
            <div>유튜브 링크</div>
          </div>
          <input class="enroll-input" placeholder="링크를 입력해 주세요." />
        </div>

        {/* border */}
        <div class="enroll-border"></div>

        <div class="enroll-row-section">
          <div>사진 첨부</div>
          <div class="picture-enroll-row">
            <img src="./assets/add_image.png" />
            <img src="./assets/add_image.png" />
            <img src="./assets/add_image.png" />
          </div>
        </div>
      </div>
      <div class="enroll-button-container">
        <button class="enroll-cancel-button">취소</button>
        <button class="enroll-submit-button">등록하기</button>
      </div>
    </div>
  );
};
