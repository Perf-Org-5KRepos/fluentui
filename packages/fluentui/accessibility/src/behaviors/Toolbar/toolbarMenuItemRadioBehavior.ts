import { keyboardKey, SpacebarKey } from '@fluentui/keyboard-key';

import { IS_FOCUSABLE_ATTRIBUTE } from '../../attributes';
import { Accessibility } from '../../types';

/**
 * @specification
 *  Adds attribute 'aria-checked=true' based on the property 'active'.
 *  Adds attribute 'aria-disabled=true' based on the property 'disabled'.
 *  Adds role='menuitemradio'.
 */
const toolbarMenuItemRadioBehavior: Accessibility<ToolbarMenuItemRadioBehaviorProps> = props => ({
  attributes: {
    root: {
      [IS_FOCUSABLE_ATTRIBUTE]: true,
      'aria-checked': props.active,
      'aria-disabled': props.disabled,
      role: 'menuitemradio',
    },
  },
  keyActions: {
    root: {
      performClick: {
        keyCombinations: [{ keyCode: keyboardKey.Enter }, { keyCode: SpacebarKey }],
      },
    },
  },
});

export default toolbarMenuItemRadioBehavior;

type ToolbarMenuItemRadioBehaviorProps = {
  active?: boolean;
  disabled?: boolean;
};
