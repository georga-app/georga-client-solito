import { StyleSheet, Image } from 'react-native';
import { Surface, Button } from 'react-native-paper';
import { Container, Text } from 'dripsy';
import { TextLink, Link } from 'solito/link'

const styles = StyleSheet.create({
  headerSurface: {
    elevation: 5,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
    flexShrink: 0,
    backgroundColor: '#455a64',
    color: '#fff',
  },
  headerButton: {
    borderRadius: 5,
    minWidth: 'none',
  },
  headerButtonLabel: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    letterSpacing: 0,
  },
  headerButtonLink: {
    display: 'flex',
    padding: 9,
  },
});

function HeaderButton({ children }: { children: React.ReactNode }) {
  return (
    <Container sx={{ width: 'auto', display: 'block', mx: 0, py: 16, minWidth: 'none' }}>
      <Button style={styles.headerButton} labelStyle={styles.headerButtonLabel} onPress={() => false} uppercase={false} textColor="white">
        {children}
      </Button>
    </Container>
  )
}

export default function Header() {
  return (
    <Surface style={styles.headerSurface}>
      <Container sx={{
        mx: 'auto',
        px: [16, 24],
        minHeight: [56, 64],
        width: '100%',
        maxWidth: [null, null, null, 1536],
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
        <HeaderButton>
          <Link href="/user/fernando">
          </Link>
        </HeaderButton>
        <Container sx={{
          width: 'auto',
          mx: 0,
          display: 'flex',
          flexDirection: 'row',
          flexGrow: 1,
        }}>
          <HeaderButton>
            <TextLink href="/user/fernando" textProps={{ style: styles.headerButtonLink }}>
              Menu
            </TextLink>
          </HeaderButton>
          <HeaderButton>
            <TextLink href="/user/fernando" textProps={{ style: styles.headerButtonLink }}>
              Menu
            </TextLink>
          </HeaderButton>
        </Container>
      </Container>
    </Surface>
  )
}
