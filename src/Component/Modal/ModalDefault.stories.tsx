import React from 'react';
import ModalDefault from './ModalDefault';

export default {
  title: 'Components/ModalDefault',
  component: ModalDefault,
};

const Template = (args: any) => <ModalDefault {...args} />;

export const Default = Template.bind({});
Default.args = {
  visible: true,
  title: '기본 모달',
  subTitle: '서브 타이틀',
  children: '여기에 내용이 들어갑니다.',
};
