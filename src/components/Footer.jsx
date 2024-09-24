import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterAtt = styled.footer`
	margin: 2rem 0 1rem;

	.attribution {
		font-size: 11px;
		text-align: center;
		color: hsl(219, 9%, 45%);
	}

	.attribution a {
		color: hsl(26, 100%, 55%);
	}

	@media (min-width: 1100px) {
		margin: 6rem 0 1rem;
	}
`;

export default function Footer() {
	return (
		<FooterAtt>
			<div class="attribution">
				Challenge by{" "}
				<Link
					to={{ pathname: "https://orinson.com/" }}
					target="_blank"
				>
					Orinson Technology
				</Link>
				. Coded by{" "}
				<Link
					to={{ pathname: "https://www.linkedin.com/in/vivek-tiwari-290224283/" }}
					target="_blank"
				>
					Vivek Tiwari
				</Link>
				.
			</div>
		</FooterAtt>
	);
}
