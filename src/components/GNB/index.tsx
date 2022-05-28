import Icon from "@components/common/Icon";
import React from "react";
import * as S from "./style";
import ACCOUNT_ICON from "@assets/account-icon.svg";

const GNB = () => {
  return (
    <S.GNB>
      <Logo />
      <CategoryTab />
      <MyAccount />
    </S.GNB>
  );
};

const Logo = () => {
  return <S.Logo>LOGO</S.Logo>;
};

const CategoryTab = () => {
  return (
    <S.CategoryTab>
      <a>숙소</a>
      <a>체험</a>
      <a>온라인 체험</a>
    </S.CategoryTab>
  );
};

const MyAccount = () => {
  return <Icon iconName={ACCOUNT_ICON} iconSize={"account"} />;
};

export default GNB;