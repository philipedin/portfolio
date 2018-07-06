
import * as Typography from 'typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';

fairyGatesTheme.overrideThemeStyles = () => ({
  a: {
    color: '#000',
    textShadow: 'none',
    backgroundImage: 'none',
  },
});

const typography = new Typography(fairyGatesTheme);

export default typography;
