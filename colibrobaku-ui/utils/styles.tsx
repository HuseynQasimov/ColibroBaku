import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10
    }
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.2rem'
  },
  grow: {
    flexGrow: 1
  },
  main: {
    minHeight: '80vh'
  },
  footer: {
    textAlign: 'center'
  },
  section: {
    marginTop: 10,
    marginBottom: 10
  },
  form: {
    maxWidth: 350,
    margin: '0 auto'
  },
  productForm: {
    width: 800,
    margin: '0 auto'
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial'
  },
  errorHeader: {
    color: '#FF0000',
    textAlign: 'center'
  },
  dialogPaper: {
    width: '80'
  },
  imageSize: {
    height: '330px',
    objectFit: 'cover'
  },
  paperContainer: {
    minHeight: '100vh',
    backgroundImage: `url(${'/background/NaturaBackground.jpg'})`,
    backgroundSize: 'cover'
  }
})

export default useStyles
