<!-- This is a simple example of using PHP to turn tables into HTML. You can copy tables directly from excel docs by selecting their columns. -->
<!DOCTYPE html>
<html>
<head>
<title>Table Import</title>
</head>
<?
if (isset($_POST['create'])) {
	$data=explode("\n",trim($_POST['rawdata']));
	$title=explode("\t",array_shift($data));
	foreach ($data as $row) {
		$cells=explode("\t",$row);
		$formatted[array_shift($cells)]=$cells;
	}
	?>
	<style type='text/css'>
	table.out tr td {
		border:1px solid #666;
		padding:3px;
	}
	table.out tr th {
		border:1px solid #666;
		padding:3px;
	}
	</style>
	<h3>Output</h3>
	<?
	echo "<table class='out'>";
	echo "<tr>";
	foreach ($title as $tv) {
		echo "<th>".$tv."</th>";
	}
	echo "</tr>";
	foreach ($formatted as $k => $fv) {
		echo "<tr><td>".$k."</td>";
		foreach ($fv as $v) {
			echo "<td>".$v."</td>";
		}
		echo "</tr>";
	}
	echo "</table>";
}
?>
<h2>Table Import</h2>
<p>Copy and paste directly from excel.</p>
<form action='' method='post'>
<textarea rows='10' name='rawdata' style='width:500px;'></textarea>
<br><input type='submit' name='create' value='Submit'>
</form>
</body>
</html>
