"use client";
import { Container, Title, Text } from "@mantine/core";
import styled from "@emotion/styled";

const StyledContainer = styled(Container)`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled(Title)`
  color: #1a73e8;
  margin-bottom: 16px;
`;

export default function TitleComponent() {
  return (
    <StyledContainer>
      <StyledTitle order={1}>
        寮・社宅・一棟貸しマンション、アパート物件情報
      </StyledTitle>
      <Text style={{ color: "#333", lineHeight: "1.6", marginBottom: "8px" }}>
        寮・社宅・一括貸しマンション、アパート物件情報をまとめています。
      </Text>
      <Text style={{ color: "#333", lineHeight: "1.6", marginBottom: "8px" }}>
        毎日更新しています。
      </Text>
      <Text style={{ color: "#333", lineHeight: "1.6", marginBottom: "8px" }}>
        気になる物件があればページ下部のお問い合わせフォームからご連絡お願いいたします.
      </Text>
    </StyledContainer>
  );
}
