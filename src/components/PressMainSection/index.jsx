import * as S from './style';

function PressMainSection({ release }) {
	const body = release.body || [];
	const quotes = release.quotes || [];
	const about = release.about || [];
	const contact = release.contact;

	return (
		<S.Provider>
			{release.bannerImage && (
				<S.Container>
					<S.Banner src={release.bannerImage} alt={release.bannerAlt || ''} />
				</S.Container>
			)}

			{release.headline && (
				<S.Container>
					{(release.eyebrow || release.date) && (
						<S.Eyebrow>
							<S.EyebrowMark aria-hidden="true" />
							{release.eyebrow && <span>{release.eyebrow}</span>}
							{release.eyebrow && release.date && <span aria-hidden="true">{'\u00B7'}</span>}
							{release.date && <time dateTime={release.dateISO}>{release.date}</time>}
						</S.Eyebrow>
					)}
					<S.Headline>{release.headline}</S.Headline>
				</S.Container>
			)}

			{body.length > 0 && (
				<S.Container>
					{body.map((paragraph, i) => (
						<S.Content key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
					))}
					{release.cta && (
						<S.CtaBlock>
							<S.Cta href={release.cta.href} target="_blank" rel="noopener noreferrer">
								{release.cta.label}
							</S.Cta>
						</S.CtaBlock>
					)}
				</S.Container>
			)}

			{quotes.length > 0 && (
				<S.Container>
					{quotes.map((quote, i) => (
						<S.Quote key={i}>
							<S.QuoteText>{`\u201C${quote.text}\u201D`}</S.QuoteText>
							<S.QuoteAuthor>
								{quote.name}
								{quote.title && <S.QuoteAuthorTitle>{` \u2014 ${quote.title}`}</S.QuoteAuthorTitle>}
							</S.QuoteAuthor>
						</S.Quote>
					))}
				</S.Container>
			)}

			{about.length > 0 && (
				<S.Container>
					<S.Divider />
					{about.map((block, i) => (
						<S.AboutBlock key={i}>
							<S.SHeader>{block.title}</S.SHeader>
							<S.Content dangerouslySetInnerHTML={{ __html: block.text }} />
						</S.AboutBlock>
					))}
				</S.Container>
			)}

			{contact && (
				<S.Container>
					<S.SHeader>{contact.label}</S.SHeader>
					<S.Signature>
						{contact.name && <S.SignatureName>{contact.name}</S.SignatureName>}
						{contact.title && <S.SignatureTitle>{contact.title}</S.SignatureTitle>}
						{contact.email && (
							<S.Link href={`mailto:${contact.email}`}>{contact.email}</S.Link>
						)}
					</S.Signature>
				</S.Container>
			)}
		</S.Provider>
	)
}

export default PressMainSection;
