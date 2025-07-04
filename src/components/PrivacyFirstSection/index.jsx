import FirstGradient from '../Gradients/FirstGradient';
import SecondGradient from '../Gradients/SecondGradient';
import * as S from './style';

function PrivacyFirstSection() {
	return (
		<S.FirstSection>
			<S.Content>
				<FirstGradient />
				<SecondGradient />
				<S.ContentLeft>
					<S.ContentHeader>
						Privacy Policy
					</S.ContentHeader>
				</S.ContentLeft>
			</S.Content>
			<S.BlackOverlay />
		</S.FirstSection>
	)
}

export default PrivacyFirstSection;