<template>
	<div class="book-pending">
		<CallOutComponent />

		<div class="wrap-box box-pending">
			<div class="box-left">left</div>
			<div class="box-right">
				<div class="box-header">Sách hay nên đọc</div>
				<div class="box-body">
					<table>
						<tr>
							<th>#</th>
							<th>Tên sách</th>
							<th>Ảnh</th>
							<th>Mô tả</th>
						</tr>
						<tr>
							<td>1</td>
							<td>Tạm biệt tôi của nhiều năm về trước</td>
							<td>
								<img
									src="https://i.ytimg.com/vi/_YqwxhM24K0/maxresdefault.jpg"
									width="180px"
									height="200px"
									alt=""
								/>
							</td>
							<td>Mô tả</td>
						</tr>
						<tr>
							<td>1</td>
							<td>Tạm biệt tôi của nhiều năm về trước</td>
							<td>
								<img
									src="https://i.ytimg.com/vi/_YqwxhM24K0/maxresdefault.jpg"
									width="180px"
									height="200px"
									alt=""
								/>
							</td>
							<td>Mô tả</td>
						</tr>
					</table>
				</div>
				<div class="box-footer">
					<ul class="paginate">
						<li class="item-page">1</li>
						<li class="item-page">2</li>
						<li class="item-page">3</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CallOutComponent from "@/components/CallOut/CallOutComponent.vue";
export default {
	components: {
		CallOutComponent,
	},
};
</script>

<style></style>
