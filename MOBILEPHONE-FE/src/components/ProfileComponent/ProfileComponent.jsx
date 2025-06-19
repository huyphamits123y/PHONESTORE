import React from "react";
import { Container, FormGroup, Input, Label, RadioGroup, RadioInput, RadioLabel, SaveButton, Select, TextArea, Title, ToggleContainer, ToggleLabel } from "./style";
const ProfileComponent = () => {
    return (
        <Container>
        <Title>Mong muốn của bạn</Title>
        <FormGroup>
          <Label>Ngành nghề</Label>
          <Select multiple>
            <option>IT / Phần mềm / IOT / Điện tử viễn thông</option>
            <option>Ngành khác</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Chức danh</Label>
          <Select multiple>
            <option>Thực tập sinh lập trình</option>
            <option>Vị trí khác</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Địa điểm làm việc</Label>
          <Select multiple>
            <option>Hồ Chí Minh</option>
            <option>Hà Nội</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Mức lương (VNĐ)</Label>
          <Input type="number" placeholder="0" /> Đến <Input type="number" placeholder="0" />
        </FormGroup>
        <FormGroup>
          <Label>Mong muốn của bạn</Label>
          <TextArea placeholder="Thông tin thêm về công việc bạn mong muốn tìm và ứng tuyển..." />
        </FormGroup>
        <ToggleContainer>
          <input type="checkbox" id="notify" />
          <ToggleLabel htmlFor="notify">Nhận thông báo</ToggleLabel>
        </ToggleContainer>
        <RadioGroup>
          <RadioLabel>
            <RadioInput type="radio" name="frequency" value="always" />
            Luôn luôn
          </RadioLabel>
          <RadioLabel>
            <RadioInput type="radio" name="frequency" value="daily" />
            Hàng ngày
          </RadioLabel>
          <RadioLabel>
            <RadioInput type="radio" name="frequency" value="weekly" />
            Hàng tuần
          </RadioLabel>
        </RadioGroup>
        <SaveButton>Lưu</SaveButton>
      </Container>
   
    )
}
export default ProfileComponent