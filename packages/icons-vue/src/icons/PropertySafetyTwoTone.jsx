// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PropertySafetyTwoToneSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyTwoTone';

export default {
  name: 'IconPropertySafetyTwoTone',
  displayName: 'PropertySafetyTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PropertySafetyTwoToneSvg } },
      children,
    ),
};