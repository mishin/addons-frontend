import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  ADDON_TYPE_DICT,
  ADDON_TYPE_EXTENSION,
  ADDON_TYPE_LANG,
  ADDON_TYPE_THEME,
  ENABLED,
  UNKNOWN,
} from 'core/constants';
import translate from 'core/i18n/translate';
import Badge from 'ui/components/Badge';

import './styles.scss';


type Props = {|
  addon: Object,
|};

export const AddonBadgesBase = (props: Props) => {
  const { addon, i18n } = props;

  const getFeaturedText = (addonType: string) => {
    switch (addonType) {
      case ADDON_TYPE_EXTENSION:
        return i18n.gettext('Featured Extension');
      case ADDON_TYPE_THEME:
        return i18n.gettext('Featured Theme');
      default:
        return i18n.gettext('Featured Add-on');
    }
  }

  return (
    <div className="AddonBadges">
      {addon && addon.is_featured ? (
        <Badge
          type="featured"
          label={getFeaturedText(addon.type)}
        />
      ) : null}
      {addon && addon.isRestartRequired ? (
        <Badge
          type="restart-required"
          label={i18n.gettext('Restart Required')}
        />
      ) : null}
      {addon && addon.is_experimental ? (
        <Badge
          type="experimental"
          label={i18n.gettext('Experimental')}
        />
      ) : null}
    </div>
  );
};

export default compose(
  translate(),
)(AddonBadgesBase);
